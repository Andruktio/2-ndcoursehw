function getRandomNumber(min, max) {
    return (Math.round(Math.random() * (max - min) + min));
}

function number() {
    searchNumber =  getRandomNumber(0,100);
    let userNumber = Number(prompt('Я загадал число от 1 до 100, попробуйте угадать!'));
    while (userNumber != searchNumber){
        if (userNumber > searchNumber){
            userNumber = prompt('Мое число меньше, попробуй еще раз');
        } else {
            userNumber = prompt('Мое число больше, попробуй еще раз');
        }
    }
    alert(`Отлично, ты справился, я дейсвтительно загадал число ${searchNumber}!`);
}

function arithmetic() {
    const signs = ['-', '+','/','*'];
    const sign = signs[Math.floor(Math.random() * signs.length)];
    let numberFirst = 0;
    let numberSecond = 0;
    let answer = 0;
    let userAnswer = 0;
    let numberArr = [];
    switch (sign) {
        case '+':
            numberFirst = getRandomNumber(0,50);
            numberSecond = getRandomNumber(0,50);
            answer = numberFirst + numberSecond;
            userAnswer = prompt(`Реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            while (userAnswer != answer){
                userAnswer = prompt(`Ты ошибся, попробуй еще раз, реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            }
            alert(`Отлично, ты справился, правильный ответ действительно ${answer}!`);
            break;
        case '*':
            numberFirst = getRandomNumber(1,10);
            numberSecond = getRandomNumber(1,10);
            answer = numberFirst * numberSecond;
            userAnswer = prompt(`Реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            while (userAnswer != answer){
                userAnswer = prompt(`Ты ошибся, попробуй еще раз, реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            }
            alert(`Отлично, ты справился, правильный ответ действительно ${answer}!`);
            break;
        case '-':
            numberFirst = getRandomNumber(1,100);
            numberSecond = getRandomNumber(0,numberFirst);
            answer = numberFirst - numberSecond;
            userAnswer = prompt(`Реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            while (userAnswer != answer){
                userAnswer = prompt(`Ты ошибся, попробуй еще раз, реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            }
            alert(`Отлично, ты справился, правильный ответ действительно ${answer}!`);
            break;
        case '/':
            numberFirst = getRandomNumber(2,50);
            for (i = 2; i<= numberFirst; i++){
                if (numberFirst % i === 0){
                    numberArr.push(i);
                }
            }
            numberSecond = numberArr[Math.floor(Math.random() * numberArr.length)];
            answer = numberFirst / numberSecond;
            userAnswer = prompt(`Реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            while (userAnswer != answer){
                userAnswer = prompt(`Ты ошибся, попробуй еще раз, реши задачу ${numberFirst} ${sign} ${numberSecond} =`);
            }
            alert(`Отлично, ты справился, правильный ответ действительно ${answer}!`);
            break;
        default:
            alert('Ой, кажется что-то пошло не так...')
            break;
    }

}

function textFlip(){
    let userText = prompt('Введи текст, а я его переверну');
    alert(`Вот, что у меня получилось:\n${userText.split('').reverse().join('')}`);
}

function quizGame(){
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let scores = 0;
    alert ('Сейчас я задам 3 простых вопроса с вариантами ответов, выбери правильный!')
    for (let i = 0; i< quiz.length; i++){
        let answerFromUser = prompt(`Вопрос: ${quiz[i].question}\nВарианты ответов:\n${quiz[i].options.join("\n")}`);
        for (let j = 0; j < quiz[i].options.length; j++){
            if (quiz[i].options[j].toLowerCase().includes(answerFromUser.toLowerCase()) == true){
                answerFromUser = quiz[i].options[j][0];
            }
        }
        if (Number(answerFromUser) === quiz[i].correctAnswer){
            scores += 1;
        }
    }
    switch (true) {
        case scores === quiz.length:
            alert (`Молодец! Ты верно ответил на ${scores} из ${quiz.length} вопросов!`)
            break;
        case scores <= quiz.length && scores != 0:
            alert (`Ты верно ответил на ${scores} из ${quiz.length} вопросов!`)
            break;
        default:
            alert (`Увы, но ты верно ответил на ${scores} из ${quiz.length} вопросов!`)
            break;
    }

}