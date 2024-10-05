let cartStorage = localStorage.getItem("cartVinos")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

// Función para calcular el precio total de los productos en el carrito
function calcularPrecioTotal(vinosArray) {
    return vinosArray.reduce((total, vino) => total + (vino.precio * vino.cantidad), 0);
}

//funcion para renderizar carrito
function renderCarrito (vinosArray) {
    if (!vinosArray || !vinosArray.length) {
        cartContainer.innerHTML = 'Te falta tomar más vino! Elegí uno que te guste y volvé al carrito.'
        return;
    }
    cartContainer.innerHTML = '';
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
                            <h4 id="precio-subtotal-${vino.id}">Subtotal: $${vino.cantidad*vino.precio}</h4>
                          </div>
                          <button class="elimina" data-js="${vino.id}"> Eliminar </button>`                            
        cartContainer.appendChild(card)
    })

    const botonRestar = document.querySelectorAll('#restar-vino');
    const botonSumar = document.querySelectorAll('#sumar-vino');
    const botonEliminar = document.querySelectorAll('.elimina');
    

    botonRestar.forEach(element => {
        element.addEventListener('click', (e) => {
            const vinoId = e.target.getAttribute('data-js');
            const h1Cantidad = document.getElementById(`cantidad-vino-${vinoId}`)
            const h4Subtotal = document.getElementById(`precio-subtotal-${vinoId}`);
            const vinoStorage = vinosArray.find(vino => vino.id === Number(vinoId))
            if (vinoStorage.cantidad === 1){
                    botonRestar.disabled = true
            } else {
            vinoStorage.cantidad--
            h1Cantidad.innerText = `Cantidad:${vinoStorage.cantidad}`
            h4Subtotal.innerText = `Subtotal: $${(vinoStorage.cantidad * vinoStorage.precio)}`;
            }
            localStorage.setItem("cartVinos", JSON.stringify(vinosArray));
            actualizarPrecioTotal(vinosArray);
        })
    })


    botonSumar.forEach(element => {
        element.addEventListener('click', (e) => {
            const vinoId = e.target.getAttribute('data-js');
            const h1Cantidad = document.getElementById(`cantidad-vino-${vinoId}`)
            const h4Subtotal = document.getElementById(`precio-subtotal-${vinoId}`);
            const vinoStorage = vinosArray.find(vino => vino.id === Number(vinoId))
            vinoStorage.cantidad++
            h1Cantidad.innerText = `Cantidad:${vinoStorage.cantidad}`
            h4Subtotal.innerText = `Subtotal: $${(vinoStorage.cantidad * vinoStorage.precio)}`;
        
            localStorage.setItem("cartVinos", JSON.stringify(vinosArray));
            actualizarPrecioTotal(vinosArray);
        })
        
    });

    botonEliminar.forEach(element => {
        element.addEventListener("click", eliminarVino);
    });
    
    // función para eliminar vino del carrito
    function eliminarVino(e) {
        const vinoId = Number(e.currentTarget.getAttribute('data-js')); 
        const vinoIndex = vinosArray.findIndex(vino => vino.id === vinoId);
        if (vinoIndex !== -1) {
            vinosArray.splice(vinoIndex, 1);
            localStorage.setItem("cartVinos", JSON.stringify(vinosArray));
            renderCarrito(vinosArray);
            actualizarPrecioTotal(vinosArray);
        }
    }
    

    //boton Limpiar Carrito
    const botonLimpiar = document.createElement("div");
    botonLimpiar.innerHTML = `<button class="limpiarCarrito">Limpiar Carrito</button>`;
    cartContainer.appendChild(botonLimpiar);
    botonLimpiar.addEventListener("click", limpiarCarrito);
    function limpiarCarrito() {
        cartStorage.length = 0;
        localStorage.setItem("cartVinos", JSON.stringify(cartStorage));
        renderCarrito();
        actualizarPrecioTotal();
        
    };
    actualizarPrecioTotal(vinosArray);
}


// funcion para actualizar el precio total de las compras
function actualizarPrecioTotal(vinosArray) {
    let precioTotal = calcularPrecioTotal(vinosArray);
    let totalPrecio = document.getElementById('precio-total');
    if (!totalPrecio) {
        totalPrecio = document.createElement("div");
        totalPrecio.id = "precio-total";
        cartContainer.appendChild(totalPrecio);
    }
    totalPrecio.innerHTML = `<h3>Precio total de tus compras: $${precioTotal}</h3>`;
    localStorage.setItem("precioTotal", precioTotal);
}
renderCarrito(cartStorage);





