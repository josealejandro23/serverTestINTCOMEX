import fs from 'fs'

//función que guarda la información en un JSON emulando una db
export const saveDataDB = (cod:string, body : any) => {
   try {
      //rutas a la carpeta y nombre de archivo
      const path = './db/'
      const fileName = 'data.json'

      //si el directorio no existe es creado
      if (!fs.existsSync(path))
         fs.mkdirSync(path);

      //se obtiene la información ya almacenada en el archivo
      try {
         var data: any = fs.readFileSync(path + fileName);
      } catch (e) {
         data = '{}';
      }
      //se parsea la info como un json
      let JData = JSON.parse(data);
      //se anexa la nueva data y se vuelve a grabar en DB
      JData[cod] = body;
      fs.writeFileSync(path+fileName,JSON.stringify(JData),{encoding:'utf-8'});
   } catch (e) {
      throw new Error("Error al almacenar en la base de datos");      
   }
}