const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
let colorpik;

startEl.addEventListener('click', changeColor);
stopEl.addEventListener('click', stopColor);

function changeColor(ev) {
  startEl.disabled = true;
  stopEl.disabled = false;
  colorpik = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
  console.log(startEl);
}

function stopColor(ev) {
  startEl.disabled = false;
  stopEl.disabled = true;

  clearInterval(colorpik);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
