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
    
    if(difference < 0) {
        alert("Please choose a date in the future");
        startBtn.disabled = true;
    } 
        startBtn.disabled = false;

    const timerId = setInterval(() => {
        const now = new Date().getTime();
        const difference = selectedDate.getTime() - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const days = Math.floor(difference / day);
        const hours = Math.floor((difference % day) / hour);
        const minutes = Math.floor(((difference % day) % hour) / minute);
        const seconds = Math.floor((((difference % day) % hour) % minute) / second);

        daysCount.textContent = days;
        hoursCount.textContent = hours;
        minutesCount.textContent = minutes;
        secondsCount.textContent = seconds;
        //console.log(`${days}:${hours}:${minutes}:${seconds}`);
    }, 1000);

    if(difference == 0) {
        clearInterval(timerId);
    }

    
}

startBtn.addEventListener('click', startTimer);



