const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


const randomColor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };


const color = {
    timerId: null,
    isActive: false,
    changeColor () {
        if(this.isActive) {
            return;
        }

        this.timerId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    },

    stopChangeColor () {
        clearInterval(this.timerId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

/*function changeColor() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 1000);
}

function stopChangeColor() {
    clearInterval(timerId);
}*/

startBtn.addEventListener('click', () => {color.changeColor()});
stopBtn.addEventListener('click', () => {color.stopChangeColor()});


