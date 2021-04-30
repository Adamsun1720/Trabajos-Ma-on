const div = document.getElementById("i1")
const img = document.getElementById("Imagen")


const h1 = document.createElement("h1")
h1.textContent = "Como añadir un efecto a una imagen";

const cuerpo = document.getElementById("Parrafo");
cuerpo.textContent = ("Existen muchos plugins para insertar efectos especiales a las imagenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti.")

const boton = document.createElement("Button")
boton.type = "Button";
boton.textContent = "Leer más";
document.body.appendChild(boton);
boton.id = "Boton";

console.log(h1);

div.appendChild(h1);
div.appendChild(cuerpo);
div.appendChild(boton);