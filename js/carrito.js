let cartStorage = localStorage.getItem("cartVinos")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")


function renderCarrito (cartItems) {
    cartItems.forEach(vino =>{
        const card = document.createElement("div")
        card.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                                    <div id="datos">
                                    <h3>${vino.nombre}</h3>
                                    <h4>Variedad:${vino.variedad}</h4>
                                    <h4>Precio:$${vino.precio}</h4>
                                    </div>
                                    <div id="cantidad">
                                    <button class="resta"> - </button>
                                    <h4>Cantidad: ${vino.cantidad}</h4>
                                    <button class="suma"> + </button>
                                    </div>
                                    <h4>Subtotal: $${vino.cantidad*vino.precio}</h4>
                                    <button id="eliminar"> Eliminar </button>`                               
        cartContainer.appendChild(card)
    })
}
renderCarrito(cartStorage)

//boton Limpiar
const botonLimpiar = document.createElement("div")
        botonLimpiar.innerHTML = `<button class="limpiarCarrito">Limpiar Carrito</button>`
        cartContainer.appendChild(botonLimpiar)

botonLimpiar.addEventListener("click", limpiarCarrito)
//funcion para limpiar carrito
function limpiarCarrito() {
    cartStorage.length = 0;
    localStorage.setItem("cartVinos", JSON.stringify(cartStorage));
    renderCarrito();
}

function sumaTotal(){
    sumaTotal.innerText = cartStorage;
}

//botonEliminar.addEventListener("click", eliminarVino)
//funcion para eliminar vino del carrito
//function eliminarVino(e) {
    //const idBoton = e.currentTarget.id;
    //const index = vinos.find(vino => vino.id === idBoton);
    //cartVinos.splice(index, 1);
    //renderCarrito();

    //localStorage.setItem("cartItems",JSON.stringify(vinos));
//}

