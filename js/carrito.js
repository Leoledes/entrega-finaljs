let cartStorage = localStorage.getItem("cartVinos")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")


//funcion para renderizar Carrito
function renderCarrito (vinosArray) {
    vinosArray.forEach(vino =>{
        let card = document.createElement("div")
        card.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                          <div id="datos">
                            <h3>${vino.nombre}</h3>
                            <h4>Variedad:${vino.variedad}</h4>
                            <h4>Precio:$${vino.precio}</h4>
                          </div>
                          <div id="cantidad">
                            <button class="resta"> - </button>
                            <h4>Cantidad:${vino.cantidad}</h4>
                            <button class="suma"> + </button>
                            <h4 id="precioSubtotal">Subtotal: $${vino.cantidad*vino.precio}</h4>
                          </div>
                          <button class="eliminarVino" id="${vino.id}">Eliminar</button>`;                               
        cartContainer.appendChild(card)
})
}
renderCarrito(cartStorage);
        
    /* //funcion para contador de cantidad
    let sumar = card.getElementsByClassName(".suma")
    let restar = card.getElementsByClassName(".resta")
    let cantidad = 0

    sumar.onclick = () => {
        vino.cantidad ++
        restar.disabled = false
    }

    restar.onclick = () => {
        if (vino.cantidad === 0){
            restar.disabled = true
        } else {
            vino.cantidad --
        }
    } */





//quitButton.addEventListener("click", quitarVino)
//funcion para eliminar vinos de carrito NOTERMINADO
//function quitarVino(e) {
   // const idVinos = e.currentTarget.id;
   // const index = cartStorage.find(vino => vino.id === idVinos);
   // cartVinos.splice(index, 1);
   // renderCarrito();
   // 

    //localStorage.setItem("cartVinos",JSON.stringify(cartStorage));
    
//}
//quitarVino(cartStorage);
//NOTERMINADO




//botonEliminar.addEventListener("click", eliminarVino)
//funcion para eliminar vino del carrito
//function eliminarVino(e) {
    //const idBoton = e.currentTarget.id;
    //const index = vinos.find(vino => vino.id === idBoton);
    //cartVinos.splice(index, 1);
    //renderCarrito();

   // localStorage.setItem("cartItems",JSON.stringify(vinos));
//}


//boton Limpiar Carrito
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



