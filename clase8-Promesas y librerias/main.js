


/* 1996: settimeout, setinterval, try, catch, finally 
   2015: ES6 PROMESAS estado inicial: pending--fulfilled--rejected
   2017/18: ASYNC Y AWAIT/ el manejo de funciones asincronicas*/


/*   Las promesas son un mecanismo en JavaScript que se usan para 
trabajar con operaciones asíncronas. 
Una promesa representa una operación asíncrona que se va a cumplir en algun momento
ylo importante de las promesas es que pueden estar 
en uno de tres estados posibles: 
pendiente (pending) que es el estado de una promesa cuando nace,
resuelta (fulfilled) cuando se resuelve de manera satisfactoria,
o rechazada (rejected) que es cuando ocurre un error que nosotros no controlamos,
por ejemplo cuando tira un 404.



Una promesa se crea utilizando el constructor Promise, 
que toma una función como argumento/parametro. Esta función, a su vez, 
toma dos argumentos: 
resolve y reject. 
resolve se utiliza para indicar que la promesa se cumplio satisfactoriamente, 
mientras que reject se usa para indicar que la promesa se rechaza con un error.




Una vez que se crea una promesa, se puede encadenar una o más funciones 
de devolución de llamada (then) para manejar la resolución de la promesa y 
cualquier error que pueda ocurrir (catch). 
Las funciones then y catch toman un argumento que es la respuesta 
o el error de la promesa anterior.


 */


const promesa = new Promise((resolve, reject) => {
    // Hacer algo asíncrono, como una solicitud HTTP
    // Si la operación se realiza correctamente, llama a resolve con el resultado
    // Si la operación falla, llama a reject con un error
  });
  
  promesa.then(resultado => {
    // Manejar el resultado si la promesa se cumple
  }).catch(error => {
    // Manejar el error si la promesa se rechaza
  });
  
  
  /* En este ejemplo, se crea una nueva promesa que representa una operación asíncrona. 
  La promesa se resuelve o se rechaza según el resultado de la operación. 
  Se encadenan las funciones then y catch para manejar el resultado 
  y el error de la promesa, respectivamente.
  
  Las promesas permiten trabajar con operaciones asíncronas de una manera más legible 
  y fácil de entender que los callbacks anidados. 
  También permiten encadenar varias operaciones asíncronas juntas y manejar errores 
  en una sola función catch. */
  
  
  
  /* const eventoFuturo = (x) => {
      return new Promise( (resolve, reject) => {
          if (x === true) {
              resolve('Promesa resuelta')
          } else {
              reject('Promesa rechazada')
          }
      })
  }
  
  console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
  console.log( eventoFuturo(false) ) /
  
  
  
  //Ejemplo del try catch
   
  
  
  /* function holaMundo(){
      const mensaje = "hola mundo"
      try{
          procesarMensaje()
      }catch(error){
          console.log(error)
      }finally{
          console.error("saliendo del try catch")
      }
      return mensaje;
  }
  
  console.log(holamundo()) */
  
  
  
  
  //ejemplo asinc await
  
  
  
  
  
  // Función simulada que lee un archivo (simulada con setTimeout)
  function leerArchivo() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('Contenido del archivo');
        }, 2000); // Simulación de una operación que tarda 2 segundos en leer el archivo
      });
    }
    
  
  
  
    // Función async que utiliza await para leer el archivo
  async function procesoAsincrono() {
      console.log('Iniciando lectura del archivo...');
    
      // Utilizando await para esperar la lectura del archivo
      const contenido = await leerArchivo();
    
      // Una vez que se completa la lectura del archivo, se continúa con la ejecución
      console.log('El archivo se leyó correctamente:');
      console.log(contenido);
    }
    
    // Llamada a la función async que inicia el proceso
    procesoAsincrono();
    