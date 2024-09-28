import type { Response, NextFunction, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

declare module "express-serve-static-core" {
  interface Request {
    user: {
      id: number,
      lastName: string,
      email: string,
      firstName: string,
    }
  }
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {

    console.log('Request headers:', req.headers);
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log("Extracted token:", token);
    
    if(!token) {
      console.error("No token provided");
      return res.status(401).json({ error: 'Access token not provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_TOKEN) as JwtPayload
    console.log("Decoded token:", decoded);
    req.user = { id: decoded.id, firstName: decoded.firstName, lastName: decoded.lastName, email: decoded.email }

    return next()
    
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).send('Invalid Token');
  }
}

export default authMiddleware;