function overlay() {
    var modal = document.getElementById('myModal');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

signIn = () => {
    event.preventDefault();
    const url = 'https://sender-app.herokuapp.com/api/v1/auth/signin';

    if (document.getElementById("sign_in_password")
        && document.getElementById("user_email")) {

        user_email = document.getElementById("user_email").value;
        password = document.getElementById("sign_in_password").value;
        const raw_data = {
            "email": user_email,
            "password": password
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
        var isLoadingNode = document.getElementsByClassName('login_div')[0];
        isLoadingNode.appendChild(isLoading);
        fetch(url, request)
            .then((response) => response.json())
            .then((data) => {
                message = data["message"];
                if (message === "You have logged in successfully.") {
                    overlay();
                    token = data["user_token"]
                    window.sessionStorage.setItem("user_token", token);

                    setTimeout(() => {
                        const new_token = window.sessionStorage.getItem('user_token');
                        UserIdentity = JSON.parse(atob(new_token.split('.')[1]));
                        role = UserIdentity['identity']['role']
                        if (role === 'admin') {
                            window.location.href = "src/components/admin_home.html";
                        } else {
                            window.location.href = "src/components/home_page.html";
                        }
                        isLoadingNode.removeChild(isLoading)
                    }, 300);

                } else {
                    errorHandle = document.getElementById("error_handle");
                    errorHandle.style.display = 'block';
                    errorHandle.innerHTML = message;
                    isLoadingNode.removeChild(isLoading);
                }
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
    }
}
