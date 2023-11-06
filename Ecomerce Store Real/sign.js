function signUp(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let popup = document.getElementById("popup");
  if (name === "" || email === "" || pass === "") {
    return;
  }

  let userData = JSON.parse(localStorage.getItem("userData")) || [];
  const userExists = userData.some(user => user.email === email);

  if (userExists) {
    alert("User with this email already exists. Please use a different email.");
    return;
  }
  userData.push({ name, email, pass });
  localStorage.setItem("userData", JSON.stringify(userData));

  localStorage.setItem("name1", name);
  localStorage.setItem("email1", email);
  localStorage.setItem("pass1", pass);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  loginAfterSignUp(email, pass);
  popup.classList.add("open-popup");
  alert("SignUp Sucessfully")
  window.location.href = "index.html";
}

function loginAfterSignUp(email, pass) {
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  const user = userData.find(user => user.email === email && user.pass === pass);
  if (user) {
    const username = getUsernameFromEmail(email);
    localStorage.setItem("username", username);
  }
}

function getUsernameFromEmail(email) {
  const username = email.split('@')[0]; 
  return username;
}


function closep() {
  popup1.classList.remove("open-popup");
}
