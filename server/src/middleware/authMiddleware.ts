import type { Response, NextFunction, Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {

    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if(!token) {
      return res.status(401).json({ error: 'Access token not provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    (req as CustomRequest).token = decoded;

    return next()
    
  } catch (error) {
    res.status(401).send('Invalid Token');
  }
}

export default authMiddleware;