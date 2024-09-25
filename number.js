function number() {
    searchNumber =  Math.floor(Math.random()*100);
    console.log(searchNumber); /* Подсказка, чтобы проще проверять */
    let userNumber = Number(prompt('Я загадал число от 1 до 100, попробуйте угадать!'));
    do {
         if (userNumber < searchNumber){
            userNumber = prompt('Мое число больше, попробуй еще раз');
        } else {
            userNumber = prompt('Мое число меньше, попробуй еще раз');
        }  
    } while (userNumber != searchNumber);
    alert(`Отлично, ты справился, я дейсвтительно загадал число ${searchNumber}!`);
}
