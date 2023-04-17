function adoptMe() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    console.log("Changed");
    window.open("adoptcom.html", "_self");
  } else {
    window.open("login.html", "_self");
  }
}
