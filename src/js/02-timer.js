// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const startBt = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const seconsdEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0]; // Отримати вибрану дату
    const currentDate = new Date();
    if (currentDate <= selectedDate) {
      startBt.disabled = false;
    } else {
      startBt.disabled = true;
      return window.alert('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);
