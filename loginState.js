let loginButton = document.getElementById("loginButton");
let signUpButton = document.getElementById("signupButton");
let username = document.getElementById("username");
let logoutElement = document.getElementById("logout");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  console.log(currentUser[0]);
  loginButton.setAttribute("style", "display: none");
  signUpButton.setAttribute("style", "display: none");
  username.innerText = "Hii! "+currentUser[0].firstName;
  logoutElement.innerText = "Logout";
}

 
const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.setItem("isLoggedIn", false);
    window.location.reload();
}