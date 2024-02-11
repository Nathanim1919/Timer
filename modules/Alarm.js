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
                console.log("Alarm triggered!", alarm);
                // Add visual or notification alert here
            }
        }
    }
}

export default ClockAlarm;