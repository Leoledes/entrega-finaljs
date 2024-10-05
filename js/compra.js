let cartStorage = localStorage.getItem("cartVinos");
cartStorage = JSON.parse(cartStorage) || [];

const formSection = document.getElementById("form-section")
const inputs = document.querySelectorAll("#form-group input")
const botonSubmit = document.getElementsByClassName(".submit-btn");

botonSubmit.addEventListener("click", submitFinal);
function submitFinal(e) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let precioTotal = document.getElementById("precio-total").value;
    //Toastify
    Toastify({
        text: "Gracias por su compra "{nombre.value}" "{apellido.value}". Su compra por un valor de $"precioTotal.value" será enviada a:"direccion.value".",
        duration: 3000,
        destination: "../pages/carrito.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "#828282"
        },
        onClick: function(){} // Callback after click
    }).showToast();
}

formSection.addEventListener("submit", () =>{
    e.preventDefault()
});



      //Toastify
      Toastify({
        text: "Vino agregado al carrito!",
        duration: 3000,
        destination: "../pages/carrito.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "#828282"
        },
        onClick: function(){} // Callback after click
    }).showToast();