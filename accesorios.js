
let carrito = [];

let total = 0;

/**
 * Función para agregar un producto al carrito
 * @param {string} nombre 
 * @param {number} precio 
 */
function agregarCarrito(nombre, precio) {
  // Crear un objeto para el producto con su nombre y precio
  const producto = { nombre, precio };
  // Agregar el producto al array del carrito
  carrito.push(producto);
  // Sumar el precio del producto al total
  total += precio;
  // Actualizar el carrito visualmente
  actualizarCarrito();
}

/**
 * Función para actualizar el carrito en la interfaz
 */
function actualizarCarrito() {
  // Obtener el elemento HTML donde se muestra el carrito
  const listaCarrito = document.getElementById('lista-carrito');
  // Limpiar el contenido actual del carrito
  listaCarrito.innerHTML = '';
  
  // Iterar sobre los productos en el carrito para mostrarlos
  carrito.forEach((producto) => {
    // Crear un elemento <li> para cada producto en el carrito
    const item = document.createElement('li');
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    // Agregar el elemento <li> al carrito visual
    listaCarrito.appendChild(item);
  });

  // Actualizar el total en la interfaz
  document.getElementById('total').textContent = total.toFixed(2);
}