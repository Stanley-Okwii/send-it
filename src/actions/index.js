showPassword = () => {;
    passwordField = document.getElementById("sign_in_password");

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
}

clearErrorMessage = (event) => {
  const newValue = event.target.value;
  if(newValue.length > 0){
    errorHandle = document.getElementById("error_handle");
    errorHandle.style.display = 'none';
  }
}

clearSignUpErrorMessage = (event) => {
  const newValue = event.target.value;
  if(newValue.length > 0){
    errorHandle = document.getElementById("error_handle_sign_up");
    errorHandle.style.display = 'none';
  }
}
