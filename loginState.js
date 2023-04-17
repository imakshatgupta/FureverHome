let loginButton = document.getElementById("loginButton");
let signUpButton = document.getElementById("signupButton");
let username = document.getElementById("username");
let logoutElement = document.getElementById("logout");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let rounded = document.getElementById("rounded");


if (currentUser) {
  console.log(currentUser[0]);
  loginButton.setAttribute("style", "display: none");
  signUpButton.setAttribute("style", "display: none");
  username.innerText = currentUser[0].firstName.substring(0,1);
  logoutElement.innerText = "Logout";
  rounded.setAttribute("style", "display: flex");

}

 
const logout = () => {
localStorage.removeItem("currentUser");
localStorage.setItem("isLoggedIn", false);
window.location.reload();
};
