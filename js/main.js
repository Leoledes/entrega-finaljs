//Array de vinos en venta
const vinos = [
    {
        id: 1,
        imagen: "./img/el-enemigo-malbec.jpg",
        nombre: "El enemigo",
        variedad: "Malbec",
        precio: 18625
    },
    {
        id: 2,
        imagen: "./img/dv-catena-malbec.jpg",
        nombre: "DV Catena",
        variedad: "Malbec",
        precio: 17375
    },
    {
        id: 3,
        imagen: "./img/angelica-zapata-cabernetsauv.jpg",
        nombre: "Angelica Zapata",
        variedad: "Cabernet Sauvignon",
        precio: 21125
    },
    {
        id: 4,
        imagen: "./img/saint-felicien-malbec.jpg",
        nombre: "Saint Felicien",
        variedad: "Malbec",
        precio: 8250
    },
    {
        id: 5,
        imagen: "./img/barda-pinotnoir.jpg",
        nombre: "Barda",
        variedad: "Pinot Noir",
        precio: 43750
    },
]

let cartVinos = []

let vinosContainer = document.getElementById("vinos-container")

//funcion para renderizar los vinos en el html
function renderVinos(vinosArray){
    vinosArray.forEach(vino => {
        const card = document.createElement("div")
        card.innerHTML = `<img class="imagendevino" src="${vino.imagen}">
                          <h3>${vino.nombre}</h3>
                          <h4>Variedad:${vino.variedad}</h4>
                          <h4>Precio:$${vino.precio}</h4>
                          <button class="vinoAgregar" id="${vino.id}">Agregar</button>`
        vinosContainer.appendChild(card)
    }
    )
    addToCartButton()
}
renderVinos(vinos)

//funcion para agregar vinos a carrito
function addToCartButton () {
    addButton = document.querySelectorAll(".vinoAgregar")
    addButton.forEach(button =>{
        button.onclick = (e) => {
            const vinoId = e.currentTarget.id
            const selectedVino = vinos.find(vino => vino.id == vinoId)
            cartVinos.push(selectedVino)
            console.log(cartVinos)

            localStorage.setItem("cartVinos",JSON.stringify(cartVinos))
        }
    }
    )
}