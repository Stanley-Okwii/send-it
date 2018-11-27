registerUser = () => {
    const url = 'https://sender-app.herokuapp.com/api/v1/user';

    if (document.getElementById("registerEmail")
        && document.getElementById("registerPassword1")
        && document.getElementById("registerUserName")) {

        password_one = document.getElementById("registerPassword1").value;
        password_two = document.getElementById("registerPassword2").value;
        if (password_one == password_two) {
            const raw_data = {
                "email": document.getElementById("registerEmail").value,
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
                    alert(data["status"]);
                })
                .catch(function (error) {
                    console.log("Error: " + error);
                });
        } else {
            console.log("passwords dont match");
        }
    }
}
