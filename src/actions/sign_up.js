registerUser = () => {
    event.preventDefault();
    const url = 'https://sender-app.herokuapp.com/api/v1/user';
    errorHandle = document.getElementById("error_handle_sign_up");
    var modal = document.getElementById('myModal');

    if (document.getElementById("registerEmail")
        && document.getElementById("registerPassword1")
        && document.getElementById("registerUserName")) {

        password_one = document.getElementById("registerPassword1").value;
        password_two = document.getElementById("registerPassword2").value;
        email = document.getElementById("registerEmail").value;
        if (password_one == password_two) {
            const raw_data = {
                "email": email,
                "password": password_one,
                "name": document.getElementById("registerUserName").value
            }

            const request = {
                method: 'POST',
                body: JSON.stringify(raw_data),
                headers: {
                    "Content-Type": "application/json"
                },
            }

            fetch(url, request)
                .then((response) => response.json())
                .then((data) => {
                    message = data["message"];
                    if (message === "successfully created new account") {
                        modal.lastChild.innerHTML = message;
                        modal.style.display = (modal.style.display === "block") ? "none" : "block";
                        console.log(message);
                    } else {
                        errorHandle.innerHTML = message;
                    }
                })
                .catch(function (error) {
                    console.log("Error: " + error);
                });
            modal.style.display = (modal.style.display === "block") ? "none" : "block";
        } else {
            errorHandle.innerHTML = "passwords don't match";
        }
    }
}
