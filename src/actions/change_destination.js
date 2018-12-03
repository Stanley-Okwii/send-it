changeDestination = () => {
    event.preventDefault();
    const url = 'https://sender-app.herokuapp.com/api/v1/parcels/destination';
    bearer = `Bearer ${sessionStorage.getItem('user_token')}`;
    const value = event.currentTarget.parentNode;
    const orderId = document.getElementById('orderId').value;
    const destination = document.getElementById('destination').value;


    const raw_data = {
        "id": orderId,
        "destination": destination
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
            if(message === 'parcel delivery destination has been changed'){
                location.reload(true);
            }
            console.log(message);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
