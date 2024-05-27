
/* 
let array = [1,"letras", true, false]

const frutas =["manzana","bananas","pera","sandia"]
//indice           0        1         2      3

frutas[2]="melon"



const numeros = [10,20,30,40,50]


let suma = numeros[1]+numeros[2]

alert(suma)
 */







 /*                        ---PUSH---

                    push(): Agrega uno o más elementos al final del array.



                                const frutas = ["manzana", "banana", "naranja"];
                                frutas.push('otro elemento')
                                
                                console.log(frutas.length) // ⇒ 4
                                console.log(frutas) //["marca", 3, "palabra", “otro elemento”] */
                    







                                      /*           --POP--

                    pop(): Elimina el último elemento del array.




                                let frutas = ["manzana", "banana", "naranja"];
                                let ultimoElemento = frutas.pop();

                                console.log(frutas);  // ["manzana", "banana"]
                                console.log(ultimoElemento);  // "naranja"

                     


                                                --SHIFT--

                    shift(): Elimina el primer elemento del array.
                                
                                frutas.shift();
                                console.log(frutas); // ["banana", "naranja"]



                                                --UNSHIFT--


                    unshift(): Agrega uno o más elementos al inicio del array.
                                
                                frutas.unshift('kiwi');
                                console.log(frutas); // ["kiwi", "banana", "naranja"]



                                                --SLICE--


                    slice(): Retorna una copia de parte del array. parametros (desde,hasta)
                                
                                const copia = frutas.slice(0, 2);
                                console.log(copia); // ["kiwi", "banana"]




                                                --SPLICE--



                    splice(): Cambia el contenido del array eliminando elementos y reemplazandolos.
                                
                            '



                    concat(): Une dos o más arrays.
                                
                                const perros = ['puqui', 'negrito','manchita'];
                                const gatos = ['mishi', 'garfield', 'salem']
                                const mascotas = perros.concat(gatos);
                                console.log(mascotas); // aparecen todos los perros y gatos





                                                --JOIN--

                    join(): Une todos los elementos de un array en una cadena.
                               
                                const cadena = frutas.join(',');
                                console.log(cadena); // "kiwi, mango, sandía, banana, naranja"





                                                --INDEXOF--



                    indexOf(): Retorna la posición de un elemento específico en el array.
                                si el elemento no existe, retorna -1
                                
                                 const posicion = frutas.indexOf('banana');
                                console.log(posicion); // 1
 


                                                --INCLUDES--


                    includes(): el método includes me permite saber si un elemento que recibo por parámetro 
                    existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:



                                const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

                                console.log( nombres.includes('Rita') ) // ⇒ true
                                console.log( nombres.includes('Miguel') ) // ⇒ true
                                console.log( nombres.includes('Julieta') ) // ⇒ false
*/




//clave:valor




const personas = [

    {nombre:"eduardo", edad:30,ciudad:"Buenos aires"},
    {nombre:"ale", edad:32,ciudad:"santa Fe"},
    {nombre:"tati", edad:35,ciudad:"Buenos aires"},
    {nombre:"mati", edad:30,ciudad:"Buenos aires"},
    {nombre:"yoe", edad:32,ciudad:"santa Fe"},
    {nombre:"ricardo", edad:35,ciudad:"Buenos aires"},

]

for(let i=0; i < personas.length;i++){
    console.log(personas[i])
}
