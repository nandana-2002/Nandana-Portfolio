function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function validateForm() {
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";

var username = document.getElementById("username").value;
var email = document.getElementById("email").value;

if (username.length < 3) {
    document.getElementById("usernameError").innerText = "username must be at least 3 characters";
    return false;
}
return true;


}
let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);


    
    