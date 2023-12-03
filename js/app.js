let hourValue;
let minuteValue;
let secondValue;
let idTimer;

const getValues = (e)=>{
    e.preventDefault();

   if (hour.value === '') {
        hour.value = 0;
   } 
   if (minute.value === '') {
        minute.value = 0;
   } 
   if (minute.value !== '' && seconds.value === '') {
        seconds.value = 59;
   }
    hourValue = hour.value;
    minuteValue = minute.value;
    secondValue = seconds.value;
    
}

const timer = () =>{
    
    if (hour.value !== '' && minute.value !== '' && seconds.value !== '') {
        
        seconds.value--;
    
        if (seconds.value < 0) {
            seconds.value = 59;
    
            minute.value--;
    
            if (minute.value < 0) {
                minute.value = 59;
    
                hour.value--;
    
                if (hour.value < 0) {
                    hour.value = 0;
                }
            }else if (minute.value === 0 && hour.value === 0){
                minute.value = 0;
            }else if(minute.value === '' && hour.value === '' && seconds.value !== ''){
                minute.value = 0;
            }
        }
        if (hour.value <= 0 && minute.value <= 0 && seconds.value <= 0){
            clearInterval(idTimer)
        }
    }

}
const start = () =>{
    idTimer = setInterval(timer, 1000)   
}
const pause = (e) =>{
    e.preventDefault()
    clearInterval(idTimer);
}


const hour = document.getElementById('minuteCount');
const minute = document.getElementById('secCount');
const seconds = document.getElementById('milisecCount');

const startForm = document.getElementById('startForm');
const pauseForm = document.getElementById('pauseForm');
startForm.addEventListener('submit', getValues); 
startForm.addEventListener('submit', start);
pauseForm.addEventListener('submit', pause);

