import { userRefreshToken } from "../database/user";
import { Response, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export async function getUserToken(req: Request, res: Response) {
  res.json({
    userId: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    //pwd rapd gamit ang id sa middleware
    // i fetch nlng nato ag data sa database
  });
}

export async function getUserRefreshToken(req: Request, res: Response) {
  try {

    const refreshToken = req.body.refreshToken; // Get refresh token from request body

    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token not provided' });
    }
    
    //add verification sa thesis project humn apply sa middleware.ts

    const verifyRefreshToken = jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESHTOKEN) as JwtPayload

    if(!verifyRefreshToken) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const user = await userRefreshToken(verifyRefreshToken.id);

    if(!user || !user.refreshToken) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const newToken = jwt.sign(
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.SECRET_KEY_TOKEN,
      {
        expiresIn: process.env.TOKEN_EXPIRY
      }
    )

    res.status(200).json({ success: true, newToken });

  } catch (error) {
    console.log("RereshToken error: ", error.message);
  }
}
