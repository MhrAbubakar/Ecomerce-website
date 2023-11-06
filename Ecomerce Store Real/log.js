let email = document.getElementById("emaillog");
let pass = document.getElementById("passwordlog");
let popup = document.getElementById("popup");
let popup1 = document.getElementById("popup-1");
const form = document.getElementById("formm");
const loginButton = document.getElementById("loginButton"); 
const logina = document.getElementById("logbtn"); 

function login(e) {
  e.preventDefault();

  const email1 = localStorage.getItem("email1");
  const pass1 = localStorage.getItem("pass1");
  
  const emailVal = email.value;
  const pswrdVal = pass.value;
  console.log(email1 +  pass1);
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  const user = userData.find(user => user.email === emailVal && user.pass === pswrdVal);
  if (user) {
    popup.classList.add("open-popup");
    loginButton.style.display = "none"; 
    logina.style.display="none";
    const username = getUsernameFromEmail(emailVal);
    const usernameHeader = document.getElementById("usernameHeader");
    usernameHeader.textContent = `Welcome, ${username}!`;
    localStorage.setItem("username", username);
  } else {
    popup1.classList.add("open-popup1");
  }
}

function closep() {
  popup1.classList.remove("open-popup1");
}

function closepopup() {
  popup.classList.remove("open-popup");
  window.location.href = "index.html"; 
  logina.style.display="none";
}

form.addEventListener("submit", login);
const logoutButton = document.getElementById("logoutButton");

function logout() {
  localStorage.removeItem("email1");
  localStorage.removeItem("pass1");
  localStorage.removeItem("username");
  window.location.href = "index.html"; 
  logina.style.display="none";
}

function getUsernameFromEmail(email) {
  const username = email.split("@")[0];
  return username;}
