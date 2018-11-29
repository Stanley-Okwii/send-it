showPassword = () => {;
    passwordField = document.getElementById("sign_in_password");

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
}
