changeCurrentLocation = () => {
    const url = 'https://sender-app.herokuapp.com/api/v1/parcels/status';
    const bearer = `Bearer ${sessionStorage.getItem('user_token')}`;
    const currentLocation = document.getElementById('currentlocation').value;
    const orderId = document.getElementById('orderId').value;

    const raw_data = {
        "current_location": currentLocation,
        "id": orderId
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
            const message = data['message'];
            if (message === 'parcel delivery order has been updated') {
                location.reload(true);
            }
            console.log(message);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
