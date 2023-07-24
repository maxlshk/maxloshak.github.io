
var isAnimationRunning = false;

function changeColor(color) {
    var body = document.getElementById('body');
    if (body.classList.contains(color)) {
        return;
    }
    setColor(color);
    runAnimation();
}

function setColor(color) {
    var body = document.getElementById('body');
    body.classList.remove('blue', 'pink', 'yellow');
    body.classList.add(color);

    var photo = document.getElementById('photo');
    photo.src = 'assets/img/photo-' + color + '.jpg';

    // Save the selected color to Local Storage
    localStorage.setItem("selectedColor", color);
}

function runAnimation() {
    var svg = document.getElementById("mySVG");

    // Check if the animation is still running
    if (isAnimationRunning) {
        // If the animation is still running, do not proceed with the color change
        return;
    }

    svg.classList.add("run-animation");
    isAnimationRunning = true;

    // Remove the class and update the animation state when the animation ends
    svg.addEventListener("animationend", onAnimationEnd, { once: true });
}

function onAnimationEnd() {
    var svg = document.getElementById("mySVG");
    svg.classList.remove("run-animation");
    isAnimationRunning = false;
}

// Add this function to load the previously selected color from Local Storage
function loadSavedColor() {
    var savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
        setColor(savedColor);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Call this function when the website loads to load the saved color, if any
    loadSavedColor();
});
