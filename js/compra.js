let cartStorage = localStorage.getItem("cartVinos");
cartStorage = JSON.parse(cartStorage) || [];

const formSection = document.getElementById("form-section");
const inputs = document.querySelectorAll("#form-group input");
const botonSubmit = document.querySelector(".submit-btn");
const resultadoContainer = document.getElementById("resultado");

//Funcion para mostrar los datos ingresados
botonSubmit.addEventListener("click", submitFinal);
function submitFinal(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let precioTotal = JSON.parse(localStorage.getItem("precioTotal"));
    let mensaje =  `<h3>Gracias por su compra ${nombre} ${apellido}!</h3>
                    <p>Su pedido será entregado en: ${direccion}</p>
                    <p>Precio total: $${precioTotal}</p>`
   ;
    resultadoContainer.innerHTML = mensaje;
    formSection.reset();
}

formSection.addEventListener("submit", (e) => {
    e.preventDefault();
});