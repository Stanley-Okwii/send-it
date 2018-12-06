const url = 'https://sender-app.herokuapp.com/api/v1/role';
const bearer = `Bearer ${sessionStorage.getItem('user_token')}`;
let email, role = '';

changeRole = (event) => {
    const value = event.currentTarget.parentNode.parentNode;
    if (value) {
        email = value.childNodes[1].innerText;
        role = value.childNodes[2].innerText === "user" ? "admin" : "user";
    }

    const raw_data = {
        "email": email,
        "role": role
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
            if (message === `user role changed to ${role}`) {
                location.reload(true);
            }
            console.log(message);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
