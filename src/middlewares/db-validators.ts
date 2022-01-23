
import { Response, Request, NextFunction } from 'express';
import {  RstError, TErr400, Error400 } from '../utils/UlError';


//funciones que validan que la información recibida sea adecuada y dentro de lo esperado
export const validarNombre = (req:Request,res:Response, next: NextFunction) => { 
   try {
      const nombre = req.body.name;
      if(!nombre) throw RstError(Error400, TErr400.other, "No se recibió el parámetro nombre");    
      if (nombre.length < 5) throw RstError(Error400,TErr400.other,"Longitud del nombre inferior a 5 caracteres");         
      if (nombre.length > 15) throw RstError(Error400, TErr400.other, "Longitud del nombre mayor a 15 caracteres");
      next();
   } catch (e) {
      next(e);
   }
}

export const validarUserName = (req: Request, res: Response, next: NextFunction) => {
   try {
      const username = req.body.user;
      if (!username) throw RstError(Error400, TErr400.other, "No se recibió el parámetro user");    
      if (username.slice(0, 3) !== "XMX")
         throw RstError(Error400, TErr400.other, "El nombre de usuario debe empezar por MXM");
      next();
   } catch (e) {
      next(e);
   }
};

export const validarCargo = (req: Request, res: Response, next: NextFunction) => {
   try {
      const cargo = req.body.position;
      if (!cargo) throw RstError(Error400, TErr400.other, "No se recibió el parámetro cargo");   
      if (cargo.length < 5) throw RstError(Error400, TErr400.other, "Longitud del cargo menor a 5 caracteres");
      if (cargo.length > 10) throw RstError(Error400, TErr400.other, "Longitud del cargo mayor a 10 caracteres");
      next();
   } catch (e) {
      next(e);
   }
};

export const validarPhone = (req: Request, res: Response, next: NextFunction) => {
   try {
      const phone = req.body.phone;
      if (!phone) throw RstError(Error400, TErr400.other, "No se recibió el parámetro teléfono");   
      if (phone.slice(0, 3) != "+57")
         throw RstError(Error400, TErr400.other, "Teléfono incorrecto, debe empezar por +57");

      if (phone.length != 10) throw RstError(Error400, TErr400.other, "El teléfono debe ser de 10 caracteres en total");
      next();
   } catch (e) {
      next(e);
   }
};