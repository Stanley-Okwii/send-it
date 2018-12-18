markDelivered = (event) => {
    const url = 'https://sender-app.herokuapp.com/api/v1/parcels/status';
    bearer = `Bearer ${sessionStorage.getItem('user_token')}`;
    const value = event.currentTarget.parentNode;
    let orderId ='';
    if(value){
        orderId = value.children[1].innerText;
    }

    const raw_data = {
        "id": orderId,
        "status": "delivered"
    }

    const request = {
        method: 'PUT',
        body: JSON.stringify(raw_data),
        headers: {
            "Authorization": bearer,
            "Content-Type": "application/json"
        },
    }

    fetch(url, request)
        .then((response) => response.json())
        .then((data) => {
            message = data['message'];
            if(message === 'parcel delivery order has been updated'){
                location.reload(true);
            }
            console.log(message);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
