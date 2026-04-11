// Таймер обратного отсчёта с месяцами, днями, часами, минутами, секундами
// Заданная дата окончания (измените на нужную, формат ISO)
const endDate = new Date('2027-01-01T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    // Если время вышло
    if (distance < 0) {
        document.getElementById('months').textContent = '00';
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    // Расчёт месяцев (примерно 30.44 дня в месяце)
    const totalMonths = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
    const months = Math.floor(totalMonths % 12); // Остаток после лет
    const remainingAfterMonths = distance - (totalMonths * 1000 * 60 * 60 * 24 * 30.44);

    // Дни, часы, минуты, секунды из остатка
    const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingAfterMonths % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingAfterMonths % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingAfterMonths % (1000 * 60)) / 1000);

    // Обновление DOM с ведущими нулями
    document.getElementById('months').textContent = months.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Запуск обновления каждую секунду + первое немедленное
setInterval(updateCountdown, 1000);
updateCountdown();