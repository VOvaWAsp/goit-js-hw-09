// Described in documentation
import flatpickr from "flatpickr";
// Additional styles import
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const datetimePicker = document.querySelector("#datetime-picker");
const selectors = {
    startBtn: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}
selectors.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] <= new Date()) {
        return Notiflix.Notify.warning("Please choose a date in the future");
      } 
      selectors.startBtn.disabled = false;
  },
};

const calendar = flatpickr(datetimePicker, options)

  selectors.startBtn.addEventListener("click", handleClick);

function convertMs(ms) {
  selectors.startBtn.disabled = true;
  datetimePicker.disabled = true;
  // Number of milliseconds per unit of time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Remaining days
const days = Math.floor(ms / day);
// Remaining hours
const hours = Math.floor((ms % day) / hour);
// Remaining minutes
const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

return { days, hours, minutes, seconds };
      }

function handleClick() {
    let timeID = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(calendar.selectedDates[0] - new Date());
        selectors.days.textContent = days < 10 ? addLeadingZero(days, 2) : days;
        selectors.hours.textContent = hours < 10 ? addLeadingZero(hours, 2) : hours;
        selectors.minutes.textContent = minutes < 10 ? addLeadingZero(minutes, 2) : minutes;
        selectors.seconds.textContent = seconds < 10 ? addLeadingZero(seconds, 2) : seconds;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timeID);
        }
    }, 1000)
    function addLeadingZero(value, targetLength) {
       return String(value).padStart(targetLength, "0")
    }
 }


// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
