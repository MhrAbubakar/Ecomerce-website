
let hamburger = document.getElementById("hamb");
console.log('ghjhtg')
let crossIcon = document.getElementById("cross");
let navDiv = document.getElementById("menue");


function icon(number) {
  if (number === 1) {
    hamburger.style.display = "none";
    crossIcon.style.display = "block";
    navDiv.style.transform = "translateX(0%)";
  }
  if (number === 2) {
    crossIcon.style.display = "none";
    hamburger.style.display = "block";
    navDiv.style.transform = "translateX(100%)";
  }
}

