let encode = document.querySelector('#encode');
let decode = document.querySelector('#decode');
let output = document.querySelector('textarea');

encode.addEventListener('click', () =>{
    output.value = btoa(output.value) ;
});
decode.addEventListener('click', () =>{
    output.value = atob(output.value) ;
});

//Hacer un GET request 
 async function obtenerToken(){
 try {
 const respuesta = await ('bax.mx/challenge/token');
 return respuesta.token;

} catch (error){

   console.error ('Error al obtener el token:', error.message); 
   throw error;
  }
 }


 //Obtener las palabras
 
 async function obtenerPalabra (token){
    const palabras = [];
    try {
        let i = 0
    while (true) {
        const respuesta = await('bax.mx/challenge/token', {

            headers: {
            Authorization: 'Bearer {token}',
            },
            });
        if (respuesta.status === 404){
            break
        }
        const palabra = respuesta;
        palabras[i]  = palabra;
        i++
    }
 } catch (error) {
    console.error ('Errror al obtener la palabra' , error.message);
    throw error;
 }
}
 
 // ordenar alfabeticamente quitando la primera letra 
  function crearClave (palabras){

  const palabraOrdenadas = palabras.sort((a,b) => {
    a1 = a.substring(1,2);
    b1 = b.substring(1,2);
    if (a1 === b1) {
      return 0;
    }
    return a1 > b1 ? 1 : -1;
  });
  const palabraConsecutiva = palabraOrdenadas.join ('');
 //Juntar las palabras en una sola cadena 
return palabraConsecutiva;
}


    function fibonacciValores(palabras){
    //generar secuencia fibonacci
    let diccionario=fibonacciNumeros()
  
    // mapear letras en numeros
    let numeros=''
    palabras.forEach(element => {
        numeros+=diccionario[element]
    });
    //regresar la clave
    return numeros;
} 

function fibonacciNumeros(){
    let primero=0
    let segundo=1
    let diccionario={
        'a':0,
        'b':1,
        'c':0,
        'd':0,
        'e':0,
        'f':0,
        'g': 0,
        'h': 0,
        'i': 0,
        'j': 0,
        'k': 0,
        'l': 0,
        'm': 0,
        'n': 0,
        'o': 0,
        'p': 0,
        'q': 0,
        'r': 0,
        's': 0,
        't': 0,
        'u': 0,
        'v': 0,
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 0,
    };
        for(const[llave,valor] of Object.entries(diccionario)){
        if(llave=='a') {
            continue
        }
        if(llave=='b'){
            continue
        }
        diccionario[llave]=primero+segundo
        primero=segundo
        segundo=diccionario[llave]
    }
    return diccionario;

    }
   
    async function enviarDatos (nombre, email, clave, codigoFuente) {
        const datos = ('bax.mx/challenge/apply' , {
            name: nombre,
            email: email,
            key: clave,
            source: codigoFuente,
        });
       
    }
    
    async function funcionalidadApp (){
            
    const token = await obtenerToken();
    const palabras = await obtenerPalabras(token);
    const crearClave = generarClave(palabras);

    await enviarDatos(
    'Tu Nombre Completo',
    'tu-email@dominio.com',
    crearClave,
    'decode,encode'
    );
    }
        
    enviarDatos();   

    
