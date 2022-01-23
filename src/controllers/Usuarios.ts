import { NextFunction, Response,Request } from "express";
import {check} from 'express-validator'

import {TControlador} from "../utils/UlTypes";
import {rutas} from '../includes/UlConst';
import { postUsuario } from '../includes/UlUsuarios';
import { validarCampos, validarNombre, validarUserName, validarCargo, validarPhone } from "../middlewares/index";

export class TUserController extends TControlador {
   constructor() {
      super(rutas.usuario);
   }

   protected fijarRutas(): void {
      this.router.post(
         "/",
         [
            check("email", "El correo no es válido").isEmail(), //agrega el error al request si es que sucede
            // check("password", "El password es obligatorio y contener al menos 8 letras").isLength({ min: 8 }),
            validarNombre,
            validarCargo,
            validarUserName,
            validarPhone,
            validarCampos,
         ],
         this.createUser
      );
   }

   //--crear usuario
   private async createUser(req: Request, res: Response, next: NextFunction) {
      try {
         res.contentType('application/json');
         res.status(200).json(await postUsuario(req));
      } catch (error) {
         next(error);
      }
   }
}