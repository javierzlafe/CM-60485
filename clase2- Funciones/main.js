








function saludar(nombre){
console.log("hola, mi nombre es "+nombre)
}
let nombre = prompt("ingresar un nombre")
saludar(nombre)






/* function sumar(num1,num2){

   resultado= num1+num2

}


function mostrar(mensaje){
    console.log(mensaje)
}


sumar(1,2)


mostrar(resultado) */





/* 
function calculadora(num1,num2,operacion){
    switch(operacion){
        case "+":
          return  num1+num2
          break;
        case "-":
          return  num1-num2
          break;
        case "*":
          return  num1*num2
          break;
        case "/":
          return  num1/num2
          break;
        default:
            return 0;  
        }
}


 let resultado = calculadora(5,123,"+")

 alert(resultado)

 */





 function sumar(num1,num2) {

    let resultado = num1 + num2
    alert(resultado)

 }



 let sumar = function (num1,num2){
    return num1 + num2
 }


console.log( sumar(2,5))




function normal (a,b){
    return a+b
}

let anonima = function (a,b){
    return a+b
}

let flecha = (a,b)=>{
    return a+b
}


let flechaLineal = (a,b) => a+b