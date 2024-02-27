//Hacer un GET request 
 async function obtenerToken(){
 try {
 const respuesta = await ('/challenge/token');
 return respuesta.token;

} catch (error){

   console.error ('Error al obtener el token:', error.message); 
   throw error;
  }
 }


 //Obtener las palabras
 
 async function obtenerPalabra (token){
 try {
 const respuesta = await('/challenge/token', {

   headers: {
  Authorization: BearerTutoken
    }
 });

 if (respuesta.status === 404){
 return null; //no hay mas palabras
 }
 return respuesta 

 } catch (error) {
    console.error ('Errror al obtener la palabra' , error.message);
    throw error;
 }

 }

 // ordenar alfabeticamente quitando la primera letra 
 async function crearClave (palabras){

  const palabraOrdenadas = palabras.sort (( a, b) =>
  a.slice (1).localCompare(b.slice(1))
 
 );

 //Juntar las palabras en una sola cadena 

}
 