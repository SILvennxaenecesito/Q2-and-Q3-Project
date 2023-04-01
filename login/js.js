var loginButton = document.querySelector(".login-button");
var usernameField = document.getElementById("username-field");
var passwordField = document.getElementById("password-field");
var errorDiv = document.getElementById("error-message");

loginButton.addEventListener("click", function() {
  if (usernameField.value == "" && passwordField.value == "") {
    errorDiv.innerHTML = "Please enter your username and password.";
    console.log("Login error.");
  } else if (usernameField.value == "") {
    errorDiv.innerHTML = "Please enter your username.";
    console.log("Login error.");
  } else if (passwordField.value == "") {
    errorDiv.innerHTML = "Please enter your password.";
    console.log("Login error.");
  } else{
    window.location.href = "../index.html";
  }
});