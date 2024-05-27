/* let titulo = document.getElementsByTagName("p")
titulo.innerText= '<button>click aca</button>'
console.log(titulo.textContent) */

/* 

let paises = document.getElementsByClassName("paises")

for(const x of paises){
    console.log(x)
} */


/* 
let paises = document.querySelectorAll(".titulo")



const productos = [ {id: 1, nombre:"arroz", precio:1500},
                    {id: 2, nombre:"tomate", precio:1500},
                    {id: 3, nombre:"pan", precio:1500},
                    {id: 4, nombre:"yerba", precio:1500}]
for(const producto of productos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML= `<h1>nombre:  ${producto.nombre}</h1>
                            <h3>precio:  ${producto.precio}</h3>
                            <p> id :  ${producto.id}</p>`
    document.body.appendChild(contenedor)
} */




/* let botoncito = document.getElementById("boton")
botoncito.addEventListener("click", ()=>console.log("pumpumpum"))
botoncito.addEventListener("mousemove", function (event){
    console.log("el puntero esta en "+ event.clientX + "y en " +event.clientY)
})
 */

/* 

let inputField = document.getElementById("miCampoDeTexto")

inputField.addEventListener("change", function(event){
    console.log("valor del campo cambiado a: " + event.target.value)
}) */



let botonEnviar = document.getElementById("botonEnviar")
botonEnviar.addEventListener("click",guardarFormulario)


let robarinfo = document.getElementById("robarinfo")
robarinfo.addEventListener("click",cargarFormulario)




function guardarFormulario(){
    const formulario = document.getElementById("miFormulario")
    const datosDeFormulario = {
        nombre: formulario.nombre.value,
        edad: formulario.edad.value,
        email: formulario.mail.value
    }
    const datosJson = JSON.stringify(datosDeFormulario)

    localStorage.setItem("pochoclo",datosJson )

    alert("pelado boton")
}



function cargarFormulario(){
    const formulario = document.getElementById("miFormulario")
    const datosJson= localStorage.getItem("pochoclo")
    if(datosJson){
        const datosDeFormulario = JSON.parse(datosJson)
        formulario.nombre.value = datosDeFormulario.nombre
        formulario.edad.value = datosDeFormulario.edad
        formulario.mail.value = datosDeFormulario.mail
    }
}

