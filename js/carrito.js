let cartStorage = localStorage.getItem("cartVinos")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")


//funcion para renderizar Carrito
function renderCarrito (vinosArray) {
    if (!vinosArray || !vinosArray.length) {
        cartContainer.innerHTML = 'Te falta tomar más vino! Elegí uno que te guste y volvé al carrito.'
        return;
    }
    vinosArray.forEach(vino =>{
        let card = document.createElement("div")
        card.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                          <div id="datos">
                            <h3>${vino.nombre}</h3>
                            <h4>Variedad:${vino.variedad}</h4>
                            <h4>Precio:$${vino.precio}</h4>
                          </div>
                          <div id="cantidad">
                            <button class="resta" id="restar-vino" data-js=${vino.id} > - </button>
                            <h4 id="cantidad-vino-${vino.id}">Cantidad:${vino.cantidad}</h4>
                            <button class="suma" id="sumar-vino" data-js=${vino.id}> + </button>
                            <h4 id="precio-subtotal">Subtotal: $${vino.cantidad*vino.precio}</h4>
                          </div>
                          <button class="elimina" id="eliminar-vino" data-js=${vino.id} > Eliminar </button>`                            
        cartContainer.appendChild(card)
    })

    const botonRestar = document.querySelectorAll('#restar-vino');
    const botonSumar = document.querySelectorAll('#sumar-vino');
    const botonEliminar = document.querySelectorAll('#eliminar-vino');

    botonRestar.forEach(element => {
        element.addEventListener('click', (e) => {
            const vinoId = e.target.getAttribute('data-js');
            const h1Cantidad = document.getElementById(`cantidad-vino-${vinoId}`)
            const vinoStorage = vinosArray.find(vino => vino.id === Number(vinoId))
            if (vinoStorage.cantidad === 1){
                    botonRestar.disabled = true
            } else {
            vinoStorage.cantidad--
            h1Cantidad.innerText = `Cantidad:${vinoStorage.cantidad}`
            }
            localStorage.setItem("cartVinos", JSON.stringify(vinosArray));
        })
    })


    botonSumar.forEach(element => {
        element.addEventListener('click', (e) => {
            const vinoId = e.target.getAttribute('data-js');
            const h1Cantidad = document.getElementById(`cantidad-vino-${vinoId}`)
            const vinoStorage = vinosArray.find(vino => vino.id === Number(vinoId))
            vinoStorage.cantidad++
            h1Cantidad.innerText = `Cantidad:${vinoStorage.cantidad}`
        
            localStorage.setItem("cartVinos", JSON.stringify(vinosArray));
        })
        
    })

    //TEMRINAR CARGA ERRONEA
    botonEliminar.forEach(element => {
        element.addEventListener('click', (e) => {
            const vinoId = e.target.getAttribute('data-js');
            const vinoStorage = vinosArray.find(vino => vino.id === vinoId);    
            vinosArray.splice(vinoStorage, 1);
            });

            localStorage.setItem("cartVinos", JSON.stringify(vinosArray));

        })
    

    //boton Limpiar Carrito
    const botonLimpiar = document.createElement("div");
    botonLimpiar.innerHTML = `<button class="limpiarCarrito">Limpiar Carrito</button>`;
    cartContainer.appendChild(botonLimpiar);

    botonLimpiar.addEventListener("click", limpiarCarrito);
    //funcion para limpiar carrito
    function limpiarCarrito() {
        cartStorage.length = 0;
        localStorage.setItem("cartVinos", JSON.stringify(cartStorage));
        renderCarrito();
    };
}
renderCarrito(cartStorage);



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
