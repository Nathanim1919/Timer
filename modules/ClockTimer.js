import {hour, minute, second} from "./dom.js";

class ClockTimer {
    constructor() {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.intervalId = null;
        this.alarmInstance = null;
        this.playTimer = false;
    }

    setAlarmInstance(alarmInstance) {
        this.alarmInstance = alarmInstance;
    }

    pause() {
            clearInterval(this.intervalId);
            this.playTimer = false;
    }

    start() {
            this.playTimer = true;
            clearInterval(this.intervalId)
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
        this.playTimer = false;

        // Reset time values to 0
        this.hour = 0;
        this.minute = 0;
        this.second = 0;

        // Update the display after resetting
        second.textContent = this.second < 10? '0'+this.second:this.second;
        minute.textContent = this.minute < 10? '0'+this.minute:this.minute;
        hour.textContent = this.hour < 10? '0'+this.hour:this.hour;
    }
}

export default ClockTimer