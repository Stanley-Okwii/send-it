showUsers = () => {
    const url = 'https://sender-app.herokuapp.com/api/v1/users';
    var parentNode = document.getElementsByClassName("Table")[0];
    const bearer = `Bearer ${sessionStorage.getItem('user_token')}`;

    const request = {
        method: 'GET',
        headers: {
            "Authorization": bearer
        },
    }

    fetch(url, request)
        .then((response) => response.json())
        .then((data) => {
            create_rows(data.data).forEach(element => {
                var space = document.createElement('p');
                parentNode.appendChild(element);
                parentNode.appendChild(space);
            });
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });
}

create_rows = (data) => {
    return data.
        map((user) => {
            var element = document.createElement('div');
            element.className = "Row";
            var user_name = document.createElement('div');
            user_name.innerHTML = user.username;
            user_name.setAttribute('class', 'Cell');

            var email = document.createElement('div');
            email.innerHTML = user.email;
            email.setAttribute('class', 'Cell');

            var role = document.createElement('div');
            role.innerHTML = user.role;
            role.setAttribute('class', 'Cell');

            var permissionDiv = document.createElement('div');
            permissionDiv.setAttribute('class', 'Cell');
            var ButtonNode = document.createElement('button');
            if (user.role === 'user') {
                ButtonNode.innerHTML = 'Make admin';
                ButtonNode.setAttribute('class', 'make_admin');
                ButtonNode.setAttribute('onClick', 'makeAdmin(event)');
            }
            else {
                ButtonNode.innerHTML = 'Demote';
                ButtonNode.setAttribute('class', 'demote');
                ButtonNode.setAttribute('onClick', 'demote(event)');
            }
            permissionDiv.appendChild(ButtonNode);

            var DeleteDiv = document.createElement('div');
            DeleteDiv.setAttribute('class', 'Cell');
            var Delete = document.createElement('button');
            Delete.innerHTML = 'Delete';
            Delete.setAttribute('class', 'delete');
            Delete.setAttribute('onClick', 'deleteUser(event)');
            DeleteDiv.appendChild(Delete);



            element.appendChild(user_name);
            element.appendChild(email);
            element.appendChild(role);
            element.appendChild(permissionDiv);
            element.appendChild(Delete);

            return element;
        }
        );
}
