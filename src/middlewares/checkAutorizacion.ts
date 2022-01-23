import { NextFunction, Request, Response } from "express";

//función que valida que la cabecera de autenticación sea correcta
export const checkAutorizacion = (req: Request, res: Response, next: NextFunction) => {
   const headers: any = req.headers;
   //si no hay una cabecera se llama al middleware de manejo de errores
   if(headers.authorization !=='INTCOMEX')   
      next('Cabecera de autorización inválida');
   next();
};
