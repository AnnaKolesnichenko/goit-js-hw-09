import flatpickr from "flatpickr";

const timePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');

let selectedDate = null;

const countDown = flatpickr(timePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      selectedDate = selectedDates[0];      
    }}
    );

function startTimer() {
    const now = new Date().getTime();
    const difference = selectedDate.getTime() - now;
    console.log(difference);
}

startBtn.addEventListener('click', startTimer);

/*const dateNow = new Date();
const timeDifference = selectedDate.getTime() - dateNow.getTime();
if(timeDifference < 0) {
alert("Please choose a date in the future");
startBtn.disabled = true;
} startBtn.disabled = false;



function onTimerUpdate() {
    const setDate = "2023-05-10T00:00:00";

    const timerId = setInterval(() => {
        const endDate = options.defaultDate.getTime();
        const difference = setDate - endDate;
        
        convertMs(difference);        
    }, 1000)
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    daysCount.innerHTML = days;
    hoursCount.innerHTML = hours;
    minutesCount.innerHTML = minutes;
    secondsCount.innerHTML = seconds;
  
    //return { days, hours, minutes, seconds };
  }
      

startBtn.addEventListener('click', onTimerUpdate);



/*if(options.defaultDate < selectedDates[0]) {
    window.alert("Please choose a date in the future");
    startBtn.disabled = true;
    return;
} startBtn.disabled = false;*/
