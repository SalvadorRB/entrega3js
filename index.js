// ¡Volvemos a trabajar con nuestro array de Pizzas🍕 ! (intente acomodarlo un poco de esta forma mas visual): 
class pizza {
  constructor (id, imagen, nombre, ingredientes, precio) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

// 👉 A cada Pizza, agregarle una imagen. 
const pizzas = [
  new pizza (1, "./palmito.jpg" , "Palmito", ["muzzarella", "salsa de tomate", "palmito"], 550), 
  new pizza (2, "./napolitana.jpg", "Napolitana", ["jamón", "tomate", "muzzarella", "salsa de tomate"], 750),
  new pizza (3, "./cuatroquesos.jpg" , "Cuatro Quesos", ["chedar", "roquefort","provolone", "muzzarella"], 677), 
  new pizza (4, "./vegana.jpg" , "nVegana", ["muzzarella", "tomate", "verduras asadas", "salsa de tomate"], 900),  
  new pizza (5, "./roquefort.jpg" , "Roquefort", ["jamón", "muzzarella", "roquefort", "jamon"], 1050),
  new pizza (6, "./superpizza.jpg" , "SuperPizza", ["jamón", "muzzarella", "huevo frito", "papas fritas", "morrón"], 890), 
];


const resultado = document.getElementById("card_encontrada");
const formulario = document.getElementById("form");
const input_buscador = document.querySelector(".form__input");


// local storage. 
localStorage.setItem('pizzas', JSON.stringify(pizzas));


const buscar_pizza = (value) => (JSON.parse(localStorage.getItem('pizzas')))[value-1];


// 👉 Crear un archivo HTML que contenga un contenedor en el cual se renderice una card en la que deberán renderizar el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨) 
const mostrar_resultado = (pizza) => {
 
  if (!pizza) {
    resultado.innerHTML = `
    <div class="card_resultado">
    <h2 class="error"> No tenemos esa pizza, ingrese un valor nuevamente </h2>
    </div>`;
  } else {
    resultado.innerHTML = `
    <div class="card_resultado">
    <img class="img_pizza" src="${pizza.imagen}" alt="pizza ${pizza.id}">
    <h2 class="titulo">PIZZA ${pizza.nombre.toUpperCase()}</h2>
    <h3 class="precio"> Precio: $${pizza.precio} 🍕</h3>
    <ul/>
    <b/>Ingredientes:</b>
    <li/>${pizza.ingredientes[0]}</li>
    <li/>${pizza.ingredientes[1]}</li>
    <li/>${pizza.ingredientes[2] || ``}</li>
    <li/>${pizza.ingredientes[3] || ``}</li>
    <li/>${pizza.ingredientes[4] || ``}</li>
    </ul>
    </div>
    `;
  }
};


// input y un botón. 
const iniciar_busqueda = (e) => {
  e.preventDefault();
  const valor_buscado = input_buscador.value;
  const pizza_buscada = buscar_pizza (Number(valor_buscado));
  mostrar_resultado(pizza_buscada);
};


const init = () => {
  formulario.addEventListener ("submit", iniciar_busqueda);
};


// Ejecutando en primera línea:
init();