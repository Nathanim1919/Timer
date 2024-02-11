import {resetButton, pauseButton} from "./modules/dom.js";
import ClockAlarm from "./modules/Alarm.js";
import ClockTimer from "./modules/ClockTimer.js";




// Example usage:
const clock = new ClockTimer();
const alarm = new ClockAlarm();
alarm.addAlarm(); // Add an example alarm
clock.setAlarmInstance(alarm);
clock.start();


resetButton.addEventListener('click', () => clock.reset());
pauseButton.addEventListener('click', () => {
    if (clock.playTimer){
        clock.pause()
        pauseButton.innerHTML = '<i class="fa-solid fa-play"></i>'
        pauseButton.classList.add('pause')

    } else {
        clock.start()
        pauseButton.innerHTML = ' <i class="fa-solid fa-pause"></i>'
        pauseButton.classList.remove('pause')
    }

});