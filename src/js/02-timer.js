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
    const timeDifference = selectedDate - curentTime;

    if (timeDifference <= 0) {
      clearInterval(timer); // Зупинити таймер, якщо час вийшов
      return;
    }

    const seconds = curentTime.getSeconds();
    const minutes = curentTime.getMinutes();
    const hours = curentTime.getHours();
    const days = curentTime.getDate();

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    seconsdEl.textContent = seconds;
  }, 1000);
}
