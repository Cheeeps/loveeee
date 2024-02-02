function validateName() {
    // Get the input value
    var enteredName = document.getElementById("name").value;

    // Array of allowed names
    var allowedNames = ["jamae", "jazsha mae", "jamae clemente", "jamae l. clemente", "jamae l clemente", "jamae lanuza clemente", "jazsha mae clemente", "jazsha mae lanuza clemente", "jazsha mae l. clemente", "jazsha mae l clemente"];


    // Check if the entered name is in the allowedNames array
    if (allowedNames.includes(enteredName.toLowerCase())) {
        // If the name is allowed, submit the form
        document.getElementById("result-1").innerHTML = `Hello my loves`;    
        document.getElementById("result-2").innerHTML = "Happy Birthday to you my Loloves";    
    } else {
        // If the name is not allowed, show an alert
        document.getElementById("result").innerHTML = `Who the heck are you? You're not my bebe loves, ${enteredName}`;    

    }
}

const balloonContainer = document.getElementById("balloon-container");
 
function random(num) {
  return Math.floor(Math.random() * num);
}
 
function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}
 
function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}
 
// function removeBalloons() {
//   balloonContainer.style.opacity = 0;
//   setTimeout(() => {
//     balloonContainer.remove()
//   }, 500)
// }
 
window.addEventListener("load", () => {
  createBalloons(30)
});
 
// window.addEventListener("click", () => {
//   removeBalloons();
// });