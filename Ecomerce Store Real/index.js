
const userData = JSON.parse(localStorage.getItem("userData")) || [];
const email1 = localStorage.getItem("email1");
const pass1 = localStorage.getItem("pass1");
const signval = document.getElementById("signUser");
const logoutBtn = document.getElementById("logoutButon");
const loginBtn = document.getElementById("loginButton");
const usernameHeader = document.getElementById("usernameHeader");
const username = localStorage.getItem("username");
if (username) {
  usernameHeader.textContent = `Welcome, ${username}!`;
}
console.log(username) 

function isLoggedIn() {
  if (email1 && pass1) {
    const userMatch = userData.find(user => user.email === email1 && user.pass === pass1);
    if (userMatch) {
      console.log("login hua w aha");
      signval.style.display = "none";
      logoutBtn.style.display = "block";
      loginBtn.style.display = "none";
      return true;
      
    }
  }
  console.log("login nhi hua wa");
  return false; 
}
function logout() {
  localStorage.removeItem("email1");
  localStorage.removeItem("pass1");
  localStorage.removeItem("username");
  popup.classList.add("open-popup");
  signval.style.display = "block";
  logoutBtn.style.display = "none";
  loginBtn.style.display = "block";
  usernameHeader.textContent = "";
}


logoutBtn.addEventListener("click", logout);
function closep() {
  popup.classList.remove("open-popup");
}
if (!isLoggedIn()) {
}

