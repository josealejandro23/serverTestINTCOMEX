import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
dotEnv.config();

import { errorHandler } from '../middlewares/errorHandler';
import { setStartDate } from '../middlewares/setStartDate';
import { TControlador } from '../utils/UlTypes';
import { checkAutorizacion } from '../middlewares/checkAutorizacion';

export class servidorRest {
   public app: express.Application;
   public port: number;
   constructor(controladores: Array<TControlador>) {
      this.port = Number(process.env.PORT);
      this.app = express();
      this.setMiddlewares();
      this.setRutas(controladores);
      this.setMiddlewaresOut();
   }

   private setMiddlewares() {
      //se fija la fecha de inicio para cada petición recibida
      this.app.use(setStartDate);
      //Se usa cors para permitir peticiones desde cualquier ip
      this.app.use(cors());
      //se usa json para parsear todos los bodys como un objeto JSON
      this.app.use(express.json());
      //verificar autorización
      this.app.use(checkAutorizacion);
   }

   private setRutas(controladores: Array<TControlador>) {
      controladores.forEach((controller) => {
         this.app.use(controller.path, controller.router);
      });
   }

   private setMiddlewaresOut(){
      this.app.use(errorHandler);
   }

   public async startServer() {
      this.app.listen(this.port, () => console.log(`Servidor corriendo en ${this.port}`));
   }
}