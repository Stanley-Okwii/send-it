var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

showModal = () => {
    modal = document.getElementById('myModal');
    modal.style.display = "block";
}

closeModal = () => {
    span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

computePrice = (event) => {
    const newValue = event.target.value;
    const pricePerKilogram = 3000;
    price = document.getElementById("price");
    estimatedPrice = Number(newValue) * pricePerKilogram;
    price.value = estimatedPrice;
}

// showHome = () => {
// window.navigator.h
// }
