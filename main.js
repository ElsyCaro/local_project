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
 const palabra = [];
 try {
 const respuesta = await('/challenge/token', {

 headers: {
  Authorization: 'Bearer {token}',
    },
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
 while (true) {
    const palabra = (respuesta.obtenerPalabra);
 
    return palabra;
 } 

 // ordenar alfabeticamente quitando la primera letra 
  function crearClave (palabras){

  const palabraOrdenadas = palabras.sort (( a, b) =>
  a.slice (1).localCompare(b.slice(1))
  );
  const palabraConsecutiva = palabraOrdenadas.join ('');
 //Juntar las palabras en una sola cadena 

}
 