let vinosContainer = document.getElementById("vinos-container")
let vinos = []

//fetch con JSON
try{
fetch("./db/vinos.JSON")
.then(response => response.json())
.then(vinosArray => {
    vinos = vinosArray
    renderVinos(vinos)
})
}catch (err){
    console.log(err);
}

//funcion para renderizar vinos    
function renderVinos (vinosArray){
    vinosArray.forEach(vino => {
        const card = document.createElement("div")
        card.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                          <h3>${vino.nombre}</h3>
                          <h4>Variedad:${vino.variedad}</h4>
                          <h4>Precio:$${vino.precio}</h4>
                          <button class="vinoAgregar" id="${vino.id}">Agregar</button>`
        vinosContainer.appendChild(card)
    })
    agregarVino()
    

let cartVinos = []
//funcion para agregar vinos a carrito
function agregarVino () {
    botonAgregar = document.querySelectorAll(".vinoAgregar")
    botonAgregar.forEach(button =>{
        button.onclick = (e) => {
            const vinoId = e.currentTarget.id
            const selectedVino = vinos.find(vino => vino.id == vinoId)
            if(cartVinos.some(vino => vino.id == vinoId)) {
                const index = vinos.findIndex(vino => vino.id == vinoId)
                vinos[index].cantidad++
            } else {
                selectedVino.cantidad = 1
                cartVinos.push(selectedVino)
            }

            localStorage.setItem("cartVinos",JSON.stringify(cartVinos))

            //Toastify
            Toastify({
                text: "Vino agregado al carrito!",
                duration: 3000,
                destination: "../pages/carrito.html",
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                background: "#828282"
                },
                onClick: function(){}
            }).showToast();
        }
    }
    )
}

}


