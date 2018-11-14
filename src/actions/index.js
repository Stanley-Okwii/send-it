showPassword = () => {;
    passwordField = document.getElementById("loginPassword");

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
}
