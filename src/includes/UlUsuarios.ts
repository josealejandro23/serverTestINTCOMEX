import { Request } from "express";
import { TResponseData, TJSONObject, getResponseData } from "../utils/UlTypes";
import { saveDataDB } from '../database/config';
import { createPassword } from '../utils/password';

export const postUsuario = async (req: Request): Promise<TResponseData> => {
   return new Promise<TResponseData>(async (resolve, reject) => {  
      try {
         let body: TJSONObject = {};
         //captura de la info recibida
         const { usercode, user, name, position, phone,email,itdcontact,bwebstore,borders,binfo } = req.body;

         const password = createPassword();       
         
         //se crea el objeto a almacenar en la db
         const obj = {
               password,
               name,
               position,
               phone,
               email,
               itdcontact,
               bwebstore,
               borders,
               binfo
            }
         //se guarda la info en la base de datos
         saveDataDB(usercode,obj);
         //se crea el objeto de respuesta
         body = {
            usercode,
            user,
            password,
            msg: "Información almacenada correctamente",
         };
         //se crea un modelo de respuesta estandar
         resolve(getResponseData(req, body));
      } catch (error) {
         reject(error);
      }
   });
};

