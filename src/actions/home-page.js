var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

showModal = () => {
    modal = document.getElementById('myModal');
    document.getElementById("submit").setAttribute("onClick","create_order()");
    document.getElementById("currentlocation").parentElement.style.display = 'none';
    if(document.getElementById("orderId")){
        document.getElementById("orderId").parentElement.style.display = 'none';
    }
    modal.style.display = "block";
}

closeModal = () => {
    span = document.getElementsByClassName("close")[0];
    document.getElementById("item").readOnly = false;
    document.getElementById("weight").readOnly = false;
    document.getElementById("recipient").readOnly = false;
    document.getElementById("pickuplocation").readOnly = false;
    document.getElementsByClassName("modal-body")[0].firstElementChild.reset();

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
    let currentlocation = document.getElementById("currentlocation");
    currentlocation.readOnly = true;
    currentlocation.setAttribute('disabled','disabled');
    let destination = document.getElementById("destination");
    let price = document.getElementById("price");
    price.parentElement.style.display = 'none';
    price.readOnly = true;
    if(value){
        modalHeader.innerText = "Change destination";
        orderNode.value = value.children[0].innerText;
        parcel.value = value.children[1].innerText;
        weight.value = value.children[2].innerText;
        recipient.value = value.children[4].innerText;
        pickuplocation.value = value.children[5].innerText;
        destination.value = value.children[6].innerText;
        price.value = value.children[3].innerText;
        currentlocation.value =  value.children[7].innerText;
        showModal();
        orderNode.parentElement.style.display = 'block';
        document.getElementById("submit").setAttribute("onClick","changeDestination()");
        destination.focus();
    }
}

showDelivered = () => {
    window.location.href = "../components/delivered_orders.html";
}

showAllOrders = () => {
    window.location.href = "../components/view_all_orders.html";
}

showPending = () => {
    window.location.href = "../components/home_page.html";
}

showProfile = () => {
    token = sessionStorage.getItem("user_token");
    userIdentity = JSON.parse(atob(token.split('.')[1]));
    name = userIdentity['identity']['name']
    var user_name = document.getElementsByTagName('b')[0];
    var delivered = document.getElementsByClassName("container")[0].children[1];
    var pending = document.getElementsByClassName("container")[0].children[3];
    var profileCard = document.getElementsByClassName("side-panel")[0];
    var bodyWrapper = document.getElementsByClassName("home-container")[0];
    if(profileCard.style.display === "none" || profileCard.style.display === ""){
        profileCard.style.display = "block";
        user_name.innerText = name;
        delivered.innerText = `Delivered orders: ${sessionStorage.getItem('delivered')} `;
        pending.innerText = `Pending orders: ${sessionStorage.getItem('pending')} `
        bodyWrapper.style.margin = "-299px 5% 0% 5%";
    } else {
        profileCard.style.display = "none";
        bodyWrapper.style.margin = "20px 5% 0% 5%";
    }
}

handleSearch = (event) => {
    var value = event.target.value;
    var nodes = document.getElementsByClassName('col-1')
    for(var i = 1; i < nodes.length; i++){
        if(nodes[i].innerText !== value){
            nodes[i].parentElement.style.display = 'none';
        }
        if(value.length === 0){
            nodes[i].parentElement.style.display = 'flex';
        }
    }
}

