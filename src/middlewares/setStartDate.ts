import { NextFunction, Request, Response } from "express"

//se pone una fecha de inicio a todas las peticiones
export const setStartDate = (req:Request, res:Response,next : NextFunction) =>{
   req.fhInicio = new Date();
   next();
}