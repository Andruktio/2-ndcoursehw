/* Задание 1 */
console.log('Задание 1');
let line = ('js');
console.log(line.toUpperCase());

/* Задание 2 */
console.log('Задание 2');
function wordSearch(arr, line){
    let newArr = [];
    arr.forEach((arr) => {
        if (arr.toLowerCase().startsWith(line.toLowerCase())) {
            newArr.push(arr);
        }
     });
    return newArr;
}
let arr = ['word', 'Word', 'not word', 'word also'];
line = ('word');
console.log(wordSearch(arr,line));

/* Задание 3 */
console.log('Задание 3');
let userNumber = 32.58884;
console.log(Math.floor(userNumber));
console.log(Math.ceil(userNumber));
console.log(Math.round(userNumber));

/* Задание 4 */
console.log('Задание 4');
userNumber = [52, 53, 49, 77, 21, 32];
console.log (Math.max(...userNumber));
console.log (Math.min(...userNumber));

/* Задание 5 */
console.log('Задание 5');
function getNumber() {
    return (Math.ceil(Math.random() * 10));
}
console.log(getNumber());

/* Задание 6 */
console.log('Задание 6');
function randomArr(x){
    newArr = [];
    for (let i=0; i<Math.round(x/2); i++){
        newArr.push(Math.round(Math.random()*x));
    }
    return newArr;
}
console.log(randomArr(11));

/* Задание 7 */
console.log('Задание 7');
function getRandomNumber(min, max) {
    return (Math.round(Math.random() * (max - min) + min));
}
console.log(getRandomNumber(20,30));

/* Задание 8 */
console.log('Задание 8');
let date = new Date;
console.log(date.toDateString());

/* Задание 9 */
console.log('Задание 9');
let currentDate = new Date;
console.log(new Date(+currentDate + 73 * 24 * 60 * 60 * 1000));

/* Задание 10 */
console.log('Задание 10');
function dateFormat(date) {
    const month = ['января','февраля',' марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const day = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
    console.log(`Дата: ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} — это ${day[date.getDay()]}.`)
    console.log(`Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
dateFormat(date);
