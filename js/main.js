//Fetch con JSON
fetch("./db/data.JSON")
.then(response => response.json())
.then(vinosArray => {
    vinosArray.forEach(vino => {
        const card = document.createElement("div")
        card.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                          <h3>${vino.nombre}</h3>
                          <h4>Variedad:${vino.variedad}</h4>
                          <h4>Precio:$${vino.precio}</h4>
                          <button class="vinoAgregar" id="${vino.id}">Agregar</button>`
        vinosContainer.appendChild(card)
    })
    botonAgregar();
})


let cartVinos = []
let vinosContainer = document.getElementById("vinos-container")

//funcion para agregar vinos a carrito
function botonAgregar () {
    addButton = document.querySelectorAll(".vinoAgregar")
    addButton.forEach(button =>{
        button.onclick = (e) => {
            const vinoId = e.currentTarget.id
            const selectedVino = cartVinos.find(vino => vino.id == vinoId)
            if(cartVinos.some(vino => vino.id == vinoId)) {
                const index = cartVinos.findIndex(vino => vino.id == vinoId)
                cartVinos[index].cantidad++
            } else {
                selectedVino.cantidad = 1
                cartVinos.push(selectedVino)
            }

            localStorage.setItem("cartVinos",JSON.stringify(cartVinos))
        }
    }
    )
}

