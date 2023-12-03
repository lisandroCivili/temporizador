// let milisecs;
let hourValue;
let minuteValue;
let secondValue;
let idTimer;


const getValues = (e)=>{
    e.preventDefault();

    if (hour.value !== '') {
        minute.value = 1;
        seconds.value = 59;
    }
    
    hourValue = hour.value;
    minuteValue = minute.value;
    secondValue = seconds.value;
    
}

const timer = () =>{
    
    seconds.value--;

    if (seconds.value < 0) {
        seconds.value = 59;

        minute.value--;

        if (minute.value < 0) {
            minute.value = 59;

            hour.value--;

            if (hour.value < 0) {
                // Evitar que la hora sea negativa, reiniciándola a 0
                hour.value = 0;
            }
        }
    } 
}
const start = () =>{
    idTimer = setInterval(timer, 100)   
}
const hour = document.getElementById('minuteCount');
const minute = document.getElementById('secCount');
const seconds = document.getElementById('milisecCount');

const startForm = document.getElementById('startForm');
const startBtn = document.getElementById('start');
startForm.addEventListener('submit', getValues); 
startForm.addEventListener('submit', start); 