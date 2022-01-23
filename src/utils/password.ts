//Función que crea un password aleatorio
export const createPassword = (num = 4):string => {
   let text = ""; 
   const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
   for (var i = 0; i < num; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));  
   
   const nPossible = "1234567890";
   for (var i = 0; i < num; i++) text += nPossible.charAt(Math.floor(Math.random() * nPossible.length));

   let arr = text.split('');
   arr.sort(() => Math.random() - 0.5);
   return arr.join('');
};