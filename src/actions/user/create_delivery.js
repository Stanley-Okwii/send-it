create_order = () => {
    event.preventDefault();
    const url = 'https://sender-app.herokuapp.com/api/v1/parcels';
    errorHandle = document.getElementById("handle_order_error");

    if (document.getElementById("item")
        && document.getElementById("weight")
        && document.getElementById("pickuplocation")) {

        const parcel = document.getElementById("item").value;
        const weight = document.getElementById("weight").value;
        const pickup_location = document.getElementById("pickuplocation").value;
        const price = document.getElementById("price").value;
        const receiver = document.getElementById("recipient").value;
        const destination = document.getElementById("destination").value;

        bearer = `Bearer ${sessionStorage.getItem('user_token')}`;
        const raw_data = {
            parcel,
            weight,
            pickup_location,
            price,
            receiver,
            destination
        }


        const request = {
            method: 'POST',
            body: JSON.stringify(raw_data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": bearer,
            },
        }

        const isLoading = document.createElement('i');
        isLoading.setAttribute('class', "fa fa-spinner fa-pulse fa-2x fa-fw");
        var isLoadingNode = document.getElementsByClassName('button-wrapper')[0];
        isLoadingNode.appendChild(isLoading);
        fetch(url, request)
            .then((response) => response.json())
            .then((data) => {
                message = data["message"];
                if (message === "parcel delivery order successfully created") {
                    document.getElementById('myModal').style.display = "none";
                    document.getElementsByClassName("modal-body")[0].firstElementChild.reset();
                    location.reload(true);
                    console.log(message);
                } else {
                    errorHandle.innerHTML = message;
                }
                isLoadingNode.removeChild(isLoading)
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
    }
}
