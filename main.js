let timeoutId;
let countdownId;

function terms() {
  const box = document.querySelector('.box');
  const timerText = document.getElementById('timer-text');
  let seconds = 5;

  // Активуємо блок
  box.classList.add('active');

  // Зупиняємо попередні таймери
  clearTimeout(timeoutId);
  clearInterval(countdownId);

  // Показуємо текст "Close in 5"
  timerText.textContent = `Close in ${seconds}`;

  // Зворотний відлік
  countdownId = setInterval(() => {
    seconds--;
    timerText.textContent = `Close in ${seconds}`;
    if (seconds <= 0) {
      clearInterval(countdownId);
    }
  }, 1000);

  // Деактивація через 5 секунд
  timeoutId = setTimeout(() => {
    box.classList.remove('active');
    timerText.textContent = '';
  }, 5000);
}

