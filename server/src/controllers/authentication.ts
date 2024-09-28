import { validateUser } from "../database/schema/jms";
import { Response, Request } from "express";
import {
  userCreate,
  userEmailExist,
  userEmail,
  userUpdate,
  userLogout,
} from "../database/authentication";
import { authentication } from "../helpers/index";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export async function login(req: Request, res: Response) {
  try {
    const data: validateUser = req.body;

    const { email, password } = data;

    const user = await userEmail(email);

    if (!user) {
      return res.status(400).json({ message: "Email is invalid" });
    }

    const isMatch = await argon2.verify(user.password, password);

    if (!isMatch) {
      return res.status(403).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.SECRET_KEY_TOKEN,
      {
        expiresIn: process.env.TOKEN_EXPIRY,
      }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.SECRET_KEY_REFRESHTOKEN,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );

    console.log('Response headers:', res.getHeaders());

    await userUpdate(refreshToken, token, user.id);

    return res
      .status(200)
      .json({ message: "Login Successfull", token, refreshToken })
      .end();

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export async function register(req: Request, res: Response) {
  try {
    const data: validateUser = req.body;

    const { firstName, lastName, password, email } = data;

    const existingUser = await userEmailExist(email);

    if (!existingUser) {
      return res.status(400).json({ message: "User email already exists" });
    }

    const user = await userCreate({
      firstName,
      lastName,
      email,
      password: await authentication(password),
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export async function logout(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const user = await userLogout(id);
    res.send(user);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(400);
  }
}
