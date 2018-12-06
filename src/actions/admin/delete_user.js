deleteUser = (event) => {
    const url = 'https://sender-app.herokuapp.com/api/v1/user';
    const bearer = `Bearer ${sessionStorage.getItem('user_token')}`;
    const value = event.currentTarget.parentNode.childNodes[1];
    let email ='';
    if(value){
        email = value.innerText;
    }

    const raw_data = {
        "email": email
    }

    const request = {
        method: 'DELETE',
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
            if(message === 'user account deleted'){
                location.reload(true);
            }
            console.log(message);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}
