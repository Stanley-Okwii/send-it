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

        fetch(url, request)
            .then((response) => response.json())
            .then((data) => {
                message = data["message"];
                if (message === "You have logged in successfully.") {
                    token = data["user_token"]
                    window.sessionStorage.setItem("user_token", token);
                    UserIdentity = JSON.parse(atob(token.split('.')[1]));
                    role = UserIdentity['identity']['role']
                    if (role === 'admin') {
                        window.location.href = "src/components/admin_home.html";
                    } else {
                        window.location.href = "src/components/home_page.html";
                    }
                } else {
                    errorHandle = document.getElementById("error_handle");
                    errorHandle.style.display = 'block';
                    errorHandle.innerHTML = message;
                }
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
    }
}
