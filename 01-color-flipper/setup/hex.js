const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

let isRunning = false;
let interval = null;
let count = 0;

btn.addEventListener('click', function(){
if (!isRunning){
    interval = setInterval(() => {
        if (count >= 5){
            clearInterval(interval);
            isRunning = false;
            count = 0;
             btn.textContent = 'Start'
            return;
    }

let hexColor = '#'
for (let i = 0; i < 6; i++){
    hexColor += hex[randomNumber()]
} 

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
count++;
}, 100);

isRunning = true;
btn.textContent = "Pause"
} else {
    clearInterval(interval);
    isRunning = false;
    btn.textContent = 'Resume';
}
});



function randomNumber(){
    return Math.floor(Math.random() * hex.length);
}