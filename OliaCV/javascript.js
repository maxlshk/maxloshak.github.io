// Global variable to track animation state
var isAnimationRunning = false;

function changeColor(color) {
  var svg = document.getElementById("mySVG");

  // Check if the animation is still running
  if (isAnimationRunning) {
    // If the animation is still running, do not proceed with the color change
    return;
  }

  var body = document.getElementById('body');
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.remove('blue', 'pink', 'yellow');
//     elements[i].classList.add(color);
//     }
    if (body.classList.contains(color)) {
        return;
    }
    body.classList.remove('blue', 'pink', 'yellow');
    body.classList.add(color);

  var photo = document.getElementById('photo');
  photo.src = 'assets/img/photo-' + color + '.jpg';

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
