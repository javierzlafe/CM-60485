/*  const frutas = ["manzana", "banana", "naranja"];


                                --FOREACH--



              forEach(): Ejecuta una función para cada elemento del array.
              se podria decir que es como un for, aplicado mas sencillamente a un array

             
              frutas.forEach(function(fruta) {
                console.log(fruta.toUpperCase());
              });
 
                          // MANZANA
                          // BANANA
                          // NARANJA
                          

              en este caso tambien se podria usar un for-of, pero hay pruebas que demostraron
              que el uso de for each es mucho mas rapido a la hora de ejecutar y consumir recursos.


                                          --MAP--

              map(): Crea un nuevo array con el resultado de llamar a una función para cada elemento del array.
                          
                          const numeros = [1, 2, 3, 4, 5];
                          //declaro constante "doble" y guardo el nuevo array
                          const doble = numeros.map(function(numero) {   //Recorro cada elemento
                            return numero * 2;   //lo multiplico por 2
                          });
                          console.log(doble); // [2, 4, 6, 8, 10]


          map es parecido a for each pero la diferencia mas importante es que map, crea un NUEVO ARRAY
          y el for each, trabajo en el array original.


                                        --FIND--




          El método find se utiliza para buscar un elemento en un array que cumpla con cierta condición, 
          y devuelve el primer elemento que cumple dicha condición.



                                                  const numeros = [2, 4, 6, 8, 10];
                        const encontrado = numeros.find((numero) => numero >= 5);

                        console.log(encontrado); // Output: 6




                                      --FILTER--



              filter(): Crea un nuevo array con todos los elementos que pasan una prueba especificada en una función.
                          
                  const numerosPares = numeros.filter(function(numero) {
                            return numero % 2 === 0; //si lo divido por dos y el resto da 0
                          });
                          console.log(numerosPares); // [2, 4]

                        

        
 */
                                      /* --REDUCE-- */


             
              /* const preciosPrendas = [1, 2, 3, 4, 5];
              const suma = preciosPrendas.reduce((acumulador, valorActual) => acumulador + valorActual);
                                    
              console.log(suma); // Output: 15
 */
           

                                  //SORT

/*               const numeros = [7, 2, 10, 1, 5];

// Ordenar los números de forma ascendente
numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros);  */






function Producto (nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}
let producto1 = new Producto("lenovo",450000, 15)
let producto2 = new Producto("samsung",450000, 15)
let producto3 = new Producto("mac",450000, 15)
let producto4 = new Producto("motorola",450000, 15)
let lista = [producto1,producto2,producto3,producto4]
function filtrarProductos(){
    let palabraClave = prompt("ingresa lo que estas buscando").toUpperCase()
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))

    if( resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro coincidencia con "+ palabraClave)
    }
}
filtrarProductos()