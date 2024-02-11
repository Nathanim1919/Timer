import {hour, minute, second} from "./dom.js";
import Records from "./records.js";

class ClockTimer {
    constructor() {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.intervalId = null;
        this.alarmInstance = null;
        this.recordInstance = null;
        this.playTimer = false;
    }

    setAlarmInstance(alarmInstance) {
        this.alarmInstance = alarmInstance;
    }

    setRecordInstance(recordInstance){
        this.recordInstance = recordInstance;
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


                this.setValues()
                // Update the ClockAlarm instance's time values
                this.alarmInstance.updateTime(this.hour, this.minute, this.second);

                // Check for alarms using the single instance of ClockAlarm
                this.alarmInstance.checkAlarms();
            }, 1000);
    }


    setValues(){
        second.textContent = this.second < 10 ? '0' + this.second : this.second;
        minute.textContent = this.minute < 10 ? '0' + this.minute : this.minute;
        hour.textContent = this.hour < 10 ? '0' + this.hour : this.hour;
    }

    reset() {
        clearInterval(this.intervalId);
        this.playTimer = false;

        // Reset time values to 0
        this.hour = 0;
        this.minute = 0;
        this.second = 0;

        // Update the display after resetting
        this.setValues()
    }

    saveRecord(){
        const record = new Records();
        record.createRecord(this.hour, this.minute, this.second);
    }
}

export default ClockTimer