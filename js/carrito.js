let cartStorage = localStorage.getItem("cartVinos")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems) {
    cartItems.forEach(vino =>{
        const card = document.createElement("div")
        card.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                                    <h3>${vino.nombre}</h3>
                                    <h4>Variedad:${vino.variedad}</h4>
                                    <h4>Precio:$${vino.precio}</h4>
                                    <button class="resta"> - </button>
                                    <h4>Cantidad: ${vino.cantidad}</h4>
                                    <button class="suma"> + </button>
                                    <h4>Total: $${vino.cantidad*vino.precio}</h4>
                                    <button class="limpiar">id=${vino.id}<i class="bi bi-trash-fill"></i></button>`                               
        cartContainer.appendChild(card)

        //no terminado
        let resta = card.querySelector(".resta");

        resta.addEventListener("click", () =>{
            if(vino.cantidad !==1){
            vino.cantidad--;
        }})
        //no terminado
    }
    )
}
renderCarrito(cartStorage)

//funcion para contador de objetos en carrito
const cartContador = () => {
    numero
}

//funcion para limpiar carrito
function limpiarCarrito(e) {
    let idBoton = e.currentTarget.id;
    let vinoBorrado = vinos.find(vino => vino.id == vinoId)
        
}//no terminado