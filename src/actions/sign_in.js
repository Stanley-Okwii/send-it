signIn = () => {
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
                message = data["data"]["message"]
                console.log(message);
                if (message === "You have logged in successfully.") {
                    window.sessionStorage.setItem("user_token", data["data"]["user_token"]);
                    window.location.href = "src/components/home_page.html"
                }
            })
            .catch(function (error) {
                console.log("Error: " + error);
            });
    }
}
