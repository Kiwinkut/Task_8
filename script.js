let minValue = parseInt(prompt('Минимальное знание числа для игры','0')); //Поучаем минимальное число для игры
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')); //Получаем максимальное число для игры
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); //Предлагаем пользователю загадать число
let answerNumber  = Math.floor((minValue + maxValue) / 2); //Получаем первое предположение
let orderNumber = 1; // Номер попытки
let gameRun = true; // Флаг для проверки, что игра запущена

const orderNumberField = document.getElementById('orderNumberField'); //Получаем элементы для вывода номера попытки и ответа
const answerField = document.getElementById('answerField'); //Получаем элементы для вывода номера попытки и ответа

orderNumberField.innerText = orderNumber; //Вывод номера попытки
answerField.innerText = `Вы загадали число ${answerNumber }?`; //Выводим первое предположение

document.getElementById('btnRetry').addEventListener('click', function () { //Обработчик кнопки ЗАНОВО
    orderNumberField.innerText = '' //обнуление поля
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')); //Получаем минимальное число для игры
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')); //Получаем максимальное число для игры
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); //Предлагаем пользователю загадать число
    answerNumber  = Math.floor((minValue + maxValue) / 2); //Получаем первое предположение
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    orderNumber = 1; // Номер попытки
    gameRun = true; // Флаг для проверки, что игра запущена
      
})

document.getElementById('btnOver').addEventListener('click', function () { //Обработчик кнопки БОЛЬШЕ
    if (gameRun){  //Проверка, что игра запущена
        if (minValue === maxValue){ //Проверка совпадения максимального и минимального числа
            const phraseRandom = Math.round( Math.random()*2);  //Получаем случайное число 0 или 3
            const answerPhrase = (phraseRandom === 2) ?  //Получаем случайную фразу
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}` ;
                `Ай донт кноу` ;

            answerField.innerText = answerPhrase; //Выводим фразу
            gameRun = false; //Останавливаем игру
        } else { //Если пользователь ввел разные значения
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2); //Получаем новое предположение NB! Здесь происходит окруугление среднего арифметического вниз
            orderNumber++; //Увеличение номер попытки
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2); //Получаем случайное число 0 или 3
            const answerPhrase = (phraseRandom === 2) ? //Получаем случайную фразу
                `Может это` :
                `Или`;
                `Кажется` ;
            answerField.innerText = answerPhrase; //Выводим фразу
            answerField.innerText = `${answerPhrase} ${answerNumber }?`; //Выводим предлжение
            
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {//Обработчик кнопки меньше
    if (gameRun){ //проверка, что игра запущена
        if (maxValue === minValue){ //провера совпадения минимального и максимального числа
            const phraseRandom = Math.round( Math.random()*2); //Получаем случайное число 0 или 3
            const answerPhrase = (phraseRandom === 2) ? //Получаем случайную фразу
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
                `Ай донт кноу` ;
            answerField.innerText = answerPhrase; //Выводим фразу
            gameRun = false; //Останавливаем игру
        } else { //Если пользователь ввел разные значения 
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue ) / 2); //Получаем новое предположение NB! Здесь происходит окруугление среднего арифметического вверх
            orderNumber++; //Увеличение номера попытки
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2); //Получаем случайное число 0 или 3
            const answerPhrase = (phraseRandom === 2) ? //Получаем случайную фразу
                `Может это` :
                `Или`;
                `Кажется` ;
            answerField.innerText = answerPhrase; //Выводим фразу
            answerField.innerText = `${answerPhrase} ${answerNumber }?`; //Выводим предлжение

        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {  //Обработчик кнопки ВЕРНО
    if (gameRun){ //Проверям, что игра запущена
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}` //Выводим фразу
        gameRun = false; //Останавливаем игру
    }
})
