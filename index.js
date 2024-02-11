import {resetButton, pauseButton,playButton} from "./modules/dom.js";
import ClockAlarm from "./modules/Alarm.js";
import ClockTimer from "./modules/ClockTimer.js";




// Example usage:
const clock = new ClockTimer();
const alarm = new ClockAlarm();
alarm.addAlarm(); // Add an example alarm
clock.setAlarmInstance(alarm);
clock.start();


resetButton.addEventListener('click', () => clock.reset());
playButton.addEventListener('click', () => clock.start());
pauseButton.addEventListener('click', () => clock.pause());