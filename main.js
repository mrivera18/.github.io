function incHome() {
    homeClicks++;
    var element = document.getElementById("home"+homeClicks);
    console.log("home"+homeClicks);
    if (element) {
        element.style.transition = "opacity 1s linear 0s";
        element.style.opacity = 1;
        setTimeout(incHome, 1500)
    }
    else {
        location.hash = "#home";
        location.hash = "#aboutMe";
        
    }
}

function goTo(x,y) {
    location.hash = x;
    location.hash = y;
}

function reportWindowSize() {
    canvas.width = window.innerHeight;
    canvas.height = window.innerWidth;
}
  
var canvas = document.getElementById('canvas');
var homeClicks = 0;

document.addEventListener("DOMContentLoaded", () => setTimeout(incHome, 1000));

//canvas.innerHeight = window.innerHeight;
//canvas.innerWidth = window.innerWidth;
window.onresize = reportWindowSize;