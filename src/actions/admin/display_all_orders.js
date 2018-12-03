showAllOrders = () => {
    const url = 'https://sender-app.herokuapp.com/api/v1/parcels';
    var parentNode = document.getElementsByClassName("deliveries")[0];
    bearer = `Bearer ${sessionStorage.getItem('user_token')}`;

    const request = {
        method: 'GET',
        headers: {
            "Authorization": bearer
        },
    }

    fetch(url, request)
        .then((response) => response.json())
        .then((data) => {
           create_rows(data.data).forEach(element => {
               parentNode.appendChild(element);
           });
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}

create_rows = (data) => {
    return data.
    map((order) => {
        var element = document.createElement('li');
        element.className = "table-row";
        var no = document.createElement('div');
        no.innerHTML = order.order_id;
        no.setAttribute('class', 'col col-1');
        no.setAttribute('data-label', 'No');

        var parcel = document.createElement('div');
        parcel.innerHTML = order.parcel;
        parcel.setAttribute('class', 'col col-2');
        parcel.setAttribute('data-label', 'Parcel');

        var weight = document.createElement('div');
        weight.innerHTML = order.weight;
        weight.setAttribute('class', 'col col-3');
        weight.setAttribute('data-label', 'Weight');

        var price = document.createElement('div');
        price.innerHTML = order.price;
        price.setAttribute('class', 'col col-4');
        price.setAttribute('data-label', 'Price');

        var receiver = document.createElement('div');
        receiver.innerHTML = order.receiver;
        receiver.setAttribute('class', 'col col-5');
        receiver.setAttribute('data-label', 'Recipient');

        var pickup_location = document.createElement('div');
        pickup_location.innerHTML = order.pickup_location;
        pickup_location.setAttribute('class', 'col col-6');
        pickup_location.setAttribute('data-label', 'Pickuplocation');

        var destination = document.createElement('div');
        destination.innerHTML = order.destination;
        destination.setAttribute('class', 'col col-7');
        destination.setAttribute('data-label', 'Destination');

        var current_location = document.createElement('div');
        current_location.innerHTML = order.current_location;
        current_location.setAttribute('class', 'col col-8');
        current_location.setAttribute('data-label', 'Currenlocation');

        var status = document.createElement('div');
        status.innerHTML = order.status;
        status.setAttribute('class', 'col col-9');
        status.setAttribute('data-label', 'Status');

        element.appendChild(no);
        element.appendChild(parcel);
        element.appendChild(weight);
        element.appendChild(price);
        element.appendChild(receiver);
        element.appendChild(pickup_location);
        element.appendChild(destination);
        element.appendChild(current_location);
        element.appendChild(status);

        return element;
    }
    );
}
