// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const startBt = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const seconsdEl = document.querySelector('[data-seconds]');

startBt.addEventListener('click', startTimer);
let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0]; // Отримати вибрану дату
    const currentDate = new Date();
    if (currentDate <= selectedDate) {
      startBt.disabled = false;
    } else {
      startBt.disabled = true;
      return window.alert('Please choose a date in the future');
    }
  },
};
flatpickr('#datetime-picker', options);

function startTimer(ev) {
  const timer = setInterval(() => {
    const curentTime = new Date();
    const ms = selectedDate - curentTime;

    if (ms <= 0) {
      clearInterval(timer); // Зупинити таймер, якщо час вийшов
      return;
    }

    // const seconds = curentTime.getSeconds();
    // const minutes = curentTime.getMinutes();
    // const hours = curentTime.getHours();
    // const days = curentTime.getDate();
    const { days, hours, minutes, seconds } = convertMs(ms);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    seconsdEl.textContent = seconds;
  }, 1000);
}

function convertMs(ms) {
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
