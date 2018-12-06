const url = 'https://sender-app.herokuapp.com/api/v1/role';
const bearer = `Bearer ${sessionStorage.getItem('user_token')}`;
let email ='';

demote = (event) => {
    const value = event.currentTarget.parentNode.parentNode.childNodes[1];
    if(value){
        email = value.innerText;
    }

    const raw_data = {
        "email": email,
        "role": "user"
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
            if(message === 'user role changed to user'){
                location.reload(true);
            }
            console.log(message);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}

makeAdmin = (event) => {
    const value = event.currentTarget.parentNode.parentNode.childNodes[1];
    if(value){
        email = value.innerText;
    }

    const raw_data = {
        "email": email,
        "role": "admin"
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
            if(message === 'user role changed to admin'){
                location.reload(true);
            }
            console.log(message);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}

