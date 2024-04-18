import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Recebo o toke
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  //   validar token
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    
    // Recurpar o id do token dentro da variavel do user_id dentro da req
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
