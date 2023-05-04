import flatpickr from "flatpickr";
import Notiflix from "notiflix";

const timePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');


let selectedDate = null;
let timerId;

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

    if(difference <= 0) {
        clearInterval(timerId);   
    } 
    
    if(difference <= 0) {
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtn.disabled = true;
    } 
        startBtn.disabled = false;

    convertMs(difference);   
}

function addLeadingZero(val) {
    return String(val).padStart(2, '0');
}

function convertMs(ms) {
    timerId = setInterval(() => {
        //const now = new Date().getTime();
       // const difference = selectedDate.getTime() - now;
        const difference = Date.parse(selectedDate) - Date.parse(new Date());

        if(difference <= 0) {
            clearInterval(timerId);
        } 

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        let days, hours, minutes, seconds;

        if(difference > 0) {
            const days = addLeadingZero(Math.floor(difference / day));
            const hours = addLeadingZero(Math.floor((difference % day) / hour));
            const minutes = addLeadingZero(Math.floor(((difference % day) % hour) / minute));
            const seconds = addLeadingZero(Math.floor((((difference % day) % hour) % minute) / second));
        } else {
            days = hours = minutes = seconds = '00';
        }    
        
        daysCount.textContent = days;
        hoursCount.textContent = hours;
        minutesCount.textContent = minutes;
        secondsCount.innerHTML = seconds;

        return { 
            difference,
            days, 
            hours, 
            minutes, 
            seconds };
        //console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);
}

startBtn.addEventListener('click', startTimer);





