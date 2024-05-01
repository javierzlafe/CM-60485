
 

    let entrada = prompt("nombre")

    let edad = "bienvenido " + entrada;

    alert(edad)


//OPERACIONES BASICAS



        /* En JavaScript, se pueden realizar operaciones básicas
        matemáticas utilizando operadores aritméticos. 
        Cuales son los operadores más comunes para realizar operaciones básicas?
        suma, resta, multiplicacion, division, etc */

/*     let  numeroA = 1;
    let   numeroB = 2;
    const NUMEROC = 3;
    //Suma  de dos números (1 + 2 = 3)
    let resultadoSuma  = numeroA + numeroB;
    //Resta de dos números (2 - 1 = 1)
    let resultadoResta = numeroB - numeroA;
    //Producto de dos números (2 * 3 = 6)
    let resultadoProducto = numeroB * NUMEROC; */




/* 
let nombre = prompt("ingresa tu usuario")

if(nombre === "Juan"){
    alert("bienvenido juan")
}else{
    alert("vos no sos juan, pero bienvenido igual")
}
 */


/* let numero1 = 100
let numero2 = 500



let respuesta = (numero1 < numero2)


if(respuesta){
    alert("hola")
} */



/* let nombre = "tatiana";

if (nombre== "javier") {
    alert("hola javier");
}
else if (nombre ==  "tatiana") {
    alert("hola tatiana");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
 */




/* let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if(   (nombreIngresado !="") || (apellidoIngresado !="")   ) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado); 
} else {
    alert("Error: Ingresar nombre y apellido");
} */



//FOR


//desde; hasta; actualizacion



//for(inicio, limite o condicion, incremento)


/* for(let i =0; i<5;i++){

console.log("estoy iterando con el for " +i)

}
 */




// WHILE

/* let iterar = true


while(iterar === true){
    console.log("imprimo mensaje en consola")
   iterar = confirm("desea seguir con el bucle?")
} */



/* let contador = 6


do{
    console.log("el valor del contador es " + contador)
    contador++
}while(contador<5) */





let intento = 1
let identificar =  true

do{

    let usuario = prompt( "ingresa tu usuario (solo 3 intentos)")
    if(usuario === null){
        break
    }

    if (usuario === "tatiana" && intento <=3){
        alert("bienvenida tatiana")
        identificar = false
    }else{
        alert("no se reconoce el usuario " + usuario)
        intento++

        if(intento>3){
            alert("usted supero los 3 intentos")
            break
        }
    }
}while(identificar)