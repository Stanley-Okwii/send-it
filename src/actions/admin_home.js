navigateToDeliveredOrders = () => {
    window.location.href = "../components/admin_delivered.html";
}

navigateToAllOrders = () => {
    window.location.href = "../components/admin_all_orders.html";
}

navigateToPendingOrders = () => {
    window.location.href = "../components/admin_home.html";
}


editDeliveryAdmin = (event) => {
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
    let status = document.getElementById("status");
    let currentlocation = document.getElementById("currentlocation");
    let destination = document.getElementById("destination");
    destination.readOnly = true;
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
        currentlocation.value = value.children[7].innerText;
        status.value = value.children[8].innerText;
        showModal();
    }
}
