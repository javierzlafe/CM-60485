/*
la diferencia entre sincronía y asincronía se resume en cómo se manejan las tareas y los eventos:

En la programación sincrónica, las tareas se ejecutan una detrás de la otra en un orden predecible. 
Cada tarea tiene que esperar a que la anterior se complete para poder continuar.

En la programación asincrónica, las tareas pueden ejecutarse en cualquier orden 
y no necesitan esperar a que las tareas anteriores se completen. 
como hacemos esto? bueno, se usan mecanismos como devoluciones de llamada (callbacks), 
promesas y async/await para gestionar tareas que pueden llevar tiempo, 
como operaciones de red o lectura/escritura de archivos.

Tambien hay que tener en cuenta que:
JavaScript es un lenguaje de programación de un solo subproceso, 
en criollo? que solo puede ejecutar una tarea a la vez. 
Pero, para que funcione la asincronía usa lo que les dije recien, callbacks, promesas 
y async/await, que son técnicas para gestionar la ejecución de código asíncrono.




//SET TIMEOUT   (en criollo, establecer tiempo de espera)

/* La función setTimeout es una función de temporizador 
que se usa para ejecutar la función después de un cierto tiempo de espera. 
La sintaxis es la siguiente: */


// la estructura es asi: setTimeout(funcion a ejecutar, tiempo);


/* funcion: es la función que se ejecuta después del tiempo de espera especificado.
tiempo: El tiempo de espera en milisegundos antes de que se ejecute la función.
Por ejemplo, vamos a armar un codigo con setTimeout para programar 
una función que salude después de un tiempo de espera de 2 segundos:
 */

/* function saludar() {
  console.log('Hola mundo!');
}

setTimeout(saludar, 2000); */


/* En este ejemplo, la función saludar se ejecutará después de 2 segundos 
(2000 milisegundos) cuando se llame a setTimeout. 
La función saludar se pasa como argumento a setTimeout sin los paréntesis, 
porque no queremos que se ejecute inmediatamente, sino que se ejecute después 
de un tiempo de espera. (en este caso 2 segundos)

Es importante tener en cuenta que setTimeout es una función asíncrona 
y no bloquea la ejecución del código. Por lo tanto, después de llamar a setTimeout, 
el código continúa ejecutándose y no espera a que se complete la función 
"saludar" para continuar con lo demas.*/



/* console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 3000)

console.log("Fin proceso")
 */

//ejemplo del boton  filmina

const btn = document.querySelector('#boton') //ojo,acuerdense de crear el boton en el html
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')
    

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})

 



//EJEMPLO FILMINA (copiar y pegar para ver que hace)

/* for (let letra of "hola") {
    console.log(letra)
}

for (let letra of "mundo") {
    console.log(letra)
} */



/* for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra)
    }, 1000)
}

for (let letra of "mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 3000)
}
 */




                

                //CALL STACK

/* El call stack o pila de llamadas es una estructura de datos en 
la que se almacenan las llamadas a funciones que se están ejecutando 
actualmente en un programa. 
Es como una pila de platos: el último plato que se coloca es el primero en salir. 
tambien conocido como sistema LIFO (Last In, First Out) / Último en Entrar, Primero en Salir*/




                //EVENT LOOP

   /*  El event loop o bucle de eventos es un mecanismo en JavaScript 
   que se encarga de manejar la asincronía y el orden de ejecución de las tareas 
   en un programa.

    El event loop tiene dos componentes principales: 
    la pila de llamadas (call stack) y la cola de tareas (task queue). 
    Cuando se ejecuta un programa, las tareas que se realizan se agregan 
    a la pila de llamadas en el orden en que se invocan. 
    Si una tarea es asíncrona, se envía a una API de tiempo de espera 
    (como setTimeout), donde se espera hasta que se cumple el tiempo especificado. 
    Una vez que se cumple el tiempo especificado, la tarea se agrega 
    a la cola de tareas.
    Por eso es que aunque pongamos settimeOut 0, se sigue tomando como asincronico */



    //Set interval

/*     setInterval es un método en JavaScript que se utiliza para programar 
una función para que se ejecute repetidamente con un intervalo de tiempo fijo 
entre cada ejecución. 
La sintaxis básica de setInterval es la siguiente: */

//setInterval(funcion, tiempo);


/* Donde funcion es la función que se debe ejecutar y tiempo 
es el intervalo de tiempo en milisegundos entre cada ejecución de la función.

Por ejemplo, hagamos un código que muestre cómo usar setInterval 
para ejecutar una función que muestra la hora actual en la consola cada segundo: */


/*                           EJEMPLO HORA


let num = prompt("imgresa los segundos")
let segundos = num *1000

                            let time= setInterval(() => {
                                const date = new Date();
                                console.log(date.toLocaleTimeString());
                            }, 1000);

setTimeout(()=>{
    clearInterval(time)
},segundos) */



 /*  Es importante tener en cuenta que setInterval continúa ejecutando 
 la función a intervalos regulares hasta que se detiene manualmente. 
 Para detener la ejecución de setInterval, se puede usar el método
  clearInterval y pasarle el valor de retorno de setInterval */


/*   const intervalId = setInterval(() => {
    const date = new Date();
    console.log(date.toLocaleTimeString());
  }, 1000);
  
  // Para detener la ejecución de setInterval después de 5 segundos:
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000); */




