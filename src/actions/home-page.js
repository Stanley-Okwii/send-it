var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

showModal = () => {
    modal = document.getElementById('myModal');
    modal.style.display = "block";
}

closeModal = () => {
    span = document.getElementsByClassName("close")[0];
    document.getElementById("item").readOnly = false;
    document.getElementById("weight").readOnly = false;
    document.getElementById("recipient").readOnly = false;
    document.getElementById("pickuplocation").readOnly = false;
    document.getElementsByClassName("modal-body")[0].firstElementChild.reset()
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

editDelivery = (event) => {
    const value = event.currentTarget.parentNode;
    const modalHeader = document.getElementsByClassName("modal-header")[0].lastElementChild;
    let parcel = document.getElementById("item");
    parcel.readOnly = true;
    let weight = document.getElementById("weight");
    weight.readOnly = true;
    let recipient = document.getElementById("recipient");
    recipient.readOnly = true;
    let pickuplocation = document.getElementById("pickuplocation");
    pickuplocation.readOnly = true;
    let destination = document.getElementById("destination");
    let price = document.getElementById("price");
    price.readOnly = true;
    if(value){
        modalHeader.innerText = "Edit parcel";
        parcel.value = value.children[1].innerText;
        weight.value = value.children[2].innerText;
        recipient.value = value.children[4].innerText;
        pickuplocation.value = value.children[5].innerText;
        destination.value = value.children[6].innerText;
        price.value = value.children[3].innerText;
        showModal();
    }
}
