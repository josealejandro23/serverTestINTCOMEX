import { servidorRest } from "./models/server";
import { TControlador } from './utils/UlTypes';
import { TUserController } from "./controllers/Usuarios";


const TControladores : Array<TControlador> = [
   new TUserController
]

//con el siguiente bloque se modifica el objeto Request y se le añaden nuevas propiedades para poder leerlas en cualquier parte
//se guarda la propiedad usuario para poder mover la info del usuario que hace la petición
declare global {
   namespace Express {
      interface Request {
         fhInicio : Date,
         fhFin : Date
      }
   }
}

const server = new servidorRest(TControladores);
server.startServer();