const body = document.querySelector("body")
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
let timeId;

startBtn.addEventListener("click", handleStart);
stopBtn.addEventListener("click", handleStop);
stopBtn.disabled = true;


function handleStart(event) {
    if(event.currentTarget === event.target) {
        stopBtn.disabled = false;
        startBtn.disabled = true;
    };
    timeId = setInterval(() => {
    function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
        }   
        body.style.backgroundColor = getRandomHexColor(); 
    }, 1000)
}
 
function handleStop() {
    clearInterval(timeId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}