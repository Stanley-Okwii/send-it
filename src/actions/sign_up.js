registerUser = () => {
    event.preventDefault();
    const url = 'https://sender-app.herokuapp.com/api/v1/user';
    errorHandle = document.getElementById("error_handle_sign_up");
    var modal = document.getElementById('myModal');
    var signInTab = document.getElementById('tab1');

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

            const isLoading = document.createElement('i');
            isLoading.setAttribute('class', "fa fa-spinner fa-pulse fa-2x fa-fw");
            var isLoadingNode =  document.getElementsByClassName('signup_div')[0];
            isLoadingNode.appendChild(isLoading);
            fetch(url, request)
                .then((response) => response.json())
                .then((data) => {
                    message = data["message"];
                    if (message === "successfully created a new account") {
                        signInTab.checked = true;
                        modal.lastElementChild.lastElementChild.innerText = message + ". Go ahead and log in! ";
                        setTimeout(() => {
                            modal.style.display = (modal.style.display === "block") ? "none" : "block";
                            isLoadingNode.removeChild(isLoading);
                            console.log(message);
                        }, 300);
                    } else {
                        errorHandle.innerHTML = message;
                        isLoadingNode.removeChild(isLoading);
                    }
                })
                .catch(function (error) {
                    console.log("Error: " + error);
                });
        } else {
            errorHandle.innerHTML = "passwords don't match";
            isLoadingNode.removeChild(isLoading);
        }
    }
}
