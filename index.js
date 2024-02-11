const second = document.querySelector('.second h1');
const minute = document.querySelector('.minute h1');
const hour = document.querySelector('.hour h1');
const resetButton = document.querySelector('.resetButton');
const playButton = document.querySelector('.playButton');
const pauseButton = document.querySelector('.pauseButton');

class ClockTimer {
    constructor() {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.intervalId = null;
        this.alarmInstance = null;
    }

    setAlarmInstance(alarmInstance) {
        this.alarmInstance = alarmInstance;
    }

    pause() {
        clearInterval(this.intervalId);
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

            second.textContent = this.second < 10 ? '0' + this.second : this.second;
            minute.textContent = this.minute < 10 ? '0' + this.minute : this.minute;
            hour.textContent = this.hour < 10 ? '0' + this.hour : this.hour;

            // Update the ClockAlarm instance's time values
            this.alarmInstance.updateTime(this.hour, this.minute, this.second);

            // Check for alarms using the single instance of ClockAlarm
            this.alarmInstance.checkAlarms();
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

class ClockAlarm {
    #hour;
    #minute;
    #second;
    #alarms = [];

    constructor() {
        this.#hour = 0;
        this.#minute = 0;
        this.#second = 10;
    }

    addAlarm() {
        this.#alarms.push({
            hour: this.#hour,
            minute: this.#minute,
            second: this.#second
        });
    }

    updateTime(hour, minute, second) {
        this.#hour = hour;
        this.#minute = minute;
        this.#second = second;
    }

    checkAlarms() {
        for (const alarm of this.#alarms) {
            if (
                alarm.hour === this.#hour &&
                alarm.minute === this.#minute &&
                alarm.second === this.#second
            ) {
                // Uncomment the Howler section when you have the library and the correct path to your sound file
                // const alarmSound = new Howl({
                //     src: ['your-alarm-sound.mp3'] // Replace with your sound file
                // });
                // alarmSound.play();

                // Display or notify about triggered alarm
                const intervalId = setInterval(()=>{
                    console.log("Alarm tirigerred")
                },1000)

                setTimeout(()=>{
                    clearInterval(intervalId)
                }, 10000)
                console.log("Alarm triggered!", alarm);
                // Add visual or notification alert here
            }
        }
    }
}

// Example usage:
const clock = new ClockTimer();
const alarm = new ClockAlarm();
alarm.addAlarm(); // Add an example alarm
clock.setAlarmInstance(alarm);
clock.start();

resetButton.addEventListener('click', () => clock.reset());
playButton.addEventListener('click', () => clock.start());
pauseButton.addEventListener('click', () => clock.pause());