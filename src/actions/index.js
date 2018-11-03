showPassword = () => {
    // show = document.getElementsByClassName("fa-eye")[0];
    // hide = document.getElementsByClassName("fa-eye-slash")[0];
    // passwordParent = document.getElementById("password-visible");
    passwordField = document.getElementById("loginPassword");

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        // console.log(passwordParent);
      } else {
        passwordField.type = 'password';
      }
}
