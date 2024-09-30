let cartStorage = localStorage.getItem("cartVinos")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems) {
    cartItems.forEach(vino =>{
        const card = document.createElement("div")
        cartContainer.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                                    <h3>${vino.nombre}</h3>
                                    <h4>Variedad:${vino.variedad}</h4>
                                    <h4>Precio:$${vino.precio}</h4>`
        cartContainer.appendChild(card)
    }
    )
}
renderCarrito(cartStorage)

//funcion para contador de cantidad
let counter = document.getElementById("contador")
let sumar = document.getElementById("mas-boton")
let restar = document.getElementById("menos-boton")
let contador = 0

sumar.onclick = () => {
    contador ++
    counter.innerHTML = contador
    restar.disabled = false
}

restar.onclick = () => {
    if (contador === 0){
        restar.disabled = true
    } else {
        contador --
        counter.innerHTML = contador
    }
}