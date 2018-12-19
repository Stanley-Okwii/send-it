navigateToDeliveredOrders = () => {
    window.location.href = "../components/admin_delivered.html";
}


navigateToAllOrders = () => {
    window.location.href = "../components/admin_all_orders.html";
}


navigateToPendingOrders = () => {
    window.location.href = "../components/admin_home.html";
}

navigateArchivedOrders = () => {
    window.location.href = "../components/admin_archive.html";
}

editDeliveryAdmin = (event) => {
    const value = event.currentTarget.parentNode;
    const modalHeader = document.getElementsByClassName("modal-header")[0].lastElementChild;
    const orderNode = document.getElementById("orderId");
    let parcel = document.getElementById("item");
    parcel.readOnly = true;
    parcel.setAttribute('disabled','disabled');
    let weight = document.getElementById("weight");
    weight.parentElement.style.display= 'none';
    let recipient = document.getElementById("recipient");
    recipient.parentElement.style.display = 'none';
    let pickuplocation = document.getElementById("pickuplocation");
    pickuplocation.readOnly = true;
    pickuplocation.setAttribute('disabled','disabled');
    let current_location = document.getElementById("currentlocation");
    let destination = document.getElementById("destination");
    destination.parentElement.style.display = 'none';
    let price = document.getElementById("price");
    price.parentElement.style.display = 'none';
    price.readOnly = true;
    if(value){
        modalHeader.innerText = "Change current location";
        orderNode.value = value.children[1].innerText;
        parcel.value = value.children[2].innerText;
        weight.value = value.children[3].innerText;
        recipient.value = value.children[5].innerText;
        pickuplocation.value = value.children[6].innerText;
        destination.value = value.children[7].innerText;
        price.value = value.children[4].innerText;
        current_location.value =  value.children[8].innerText;
        showModal();
        orderNode.parentElement.style.display = 'block';
        current_location.parentElement.style.display = 'block';
        document.getElementById("submit").setAttribute("onClick","changeCurrentLocation()");
        current_location.focus();
    }
}
