const second = document.querySelector('.second h1');
const minute = document.querySelector('.minute h1');
const hour = document.querySelector('.hour h1');
const resetButton = document.querySelector('.resetButton')
const playButton = document.querySelector('.playButton')
const pauseButton = document.querySelector('.pauseButton')

class ClockTimer {
    constructor() {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.intervalId = null;
    }

    pause(){
        clearInterval(this.intervalId)
    }

    start() {

        this.intervalId = setInterval(() => {
            this.second = this.second + 1;
            if (this.second >= 60) {
                this.minute += 1;
                this.second = 0;
            }

            if (this.minute >= 60) {
                this.minute = 0;
                this.hour += 1;
                this.second = 0;
            }

            // Update the display (assuming you have elements with class 'second', 'minute', and 'hour')
            second.textContent = this.second;
            minute.textContent = this.minute;
            hour.textContent = this.hour;
        }, 1000);
    }

    reset() {
        clearInterval(this.intervalId);

        // Reset time values to 0
        this.hour = 0;
        this.minute = 0;
        this.second = 0;

        // Update the display after resetting
        second.textContent = this.second;
        minute.textContent = this.minute;
        hour.textContent = this.hour;
    }
}

// Example usage:
const clock = new ClockTimer();
clock.start();
resetButton.addEventListener('click', ()=> clock.reset())
playButton.addEventListener('click', ()=> clock.start())
pauseButton.addEventListener('click', ()=> clock.pause())