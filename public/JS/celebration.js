// Background for the rainbow button

const button = document.querySelector('#celebration');
let hue = 0;

function animateRainbow(){
    hue = (hue + 1) % 360; // Cycles the hue from 0 to 359
    button.style.background = `linear-gradient(90deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 60) % 360}, 100%, 50%), hsl(${(hue + 120) % 360}, 100%, 50%), hsl(${(hue + 180) % 360}, 100%, 50%), hsl(${(hue + 240) % 360}, 100%, 50%), hsl(${(hue + 300) % 360}, 100%, 50%))`;
    // These are rainbow gradients

    requestAnimationFrame(animateRainbow); // Loops the animation
}
animateRainbow(); // Starts the animation

///////////////////////////////////////

