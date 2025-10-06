// Background for the rainbow button

const rainbow = document.querySelector('#celebration');
let hue = 0;

function animateRainbow(){
    hue = (hue + 1) % 360; // Cycles the hue from 0 to 359
    rainbow.style.background = `linear-gradient(90deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 60) % 360}, 100%, 50%), hsl(${(hue + 120) % 360}, 100%, 50%), hsl(${(hue + 180) % 360}, 100%, 50%), hsl(${(hue + 240) % 360}, 100%, 50%), hsl(${(hue + 300) % 360}, 100%, 50%))`;
    // These are rainbow gradients

    requestAnimationFrame(animateRainbow); // Loops the animation
}
animateRainbow(); // Starts the animation

///////////////////////////////////////

// Celebration button click

const button = document.getElementById('celebration')
const styleLink = document.getElementById('style') // HTML style link

const header = document.getElementById('header') // <h1>
const text = document.getElementById('text') // <p>
const music = new Audio('/celebration.mp3')

button.addEventListener('click', function(e){
    e.preventDefault()
    styleLink.href = '/CSS/celebration.css' // Switches CSS style to celebration.css
    button.style.display = 'none' // Button dissapears

    header.textContent = 'You are now welcome to our secret society!'
    text.textContent = 'Congratulations. You have completed all 6 puzzles! Now you will join our secret society to assist me in my task. We wish you the best, and you will be provided with further instructions later.'
    // .textContent doesn't need me to add html tags
    music.play()
})