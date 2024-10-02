/* Задание 1 */
console.log ('Задание 1'); /* Эти пометки оставил для себя, чтобы в консоли не теряться при проверке */
let task = [1, 5, 4, 10, 0, 3]; /* В Этот раз решил не креативить с названиями, почти во всех один массив */
for (let i = 0; i< task.length; i++){
    if (task[i]===10) {
        break;
    } else {
        console.log(task[i]);
    }
}

/* Задание 2 */
console.log ('Задание 2');
for (let i = 0; i< task.length; i++){
    if (task[i]===4) {
        console.log(i);      
    }
}

/* Задание 3 */
console.log ('Задание 3');
task = [1, 3, 5, 10, 20];
console.log(task.join(' '));

/* Задание 4 */
console.log ('Задание 4');
const arr = [];
let row=[];
for (let i = 0; i < 3; i++) {
    row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    arr.push(row);
}
console.log(arr);

/* Задание 5 */
console.log ('Задание 5');
task = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    task.push(2);
}
console.log(task);

/* Задание 6 */
console.log ('Задание 6');
task = [9, 8, 7, 'a', 6, 5];
task = task.sort();
console.log(task.filter(task => task !='a'));

/* Задание 7 */
console.log ('Задание 7');
task = [9, 8, 7, 6, 5];
let searchNumber = Number(prompt('Введите число'));
let search = task.includes(searchNumber);
if (search == true){
    alert('Угадал');
} else {
    alert('Не угадал');
}

/* Задание 8 */
console.log ('Задание 8');
let line = 'abcdef';
let lineArr = line.split('').reverse().join(''); /* Говорили так не делать пока что, но я посмотреть разочек */
console.log(lineArr);

/* Задание 9 */
console.log ('Задание 9');
task = [[1, 2, 3],[4, 5, 6]];
let taskUnited = [...task[0], ...task[1]];
console.log(taskUnited);

/* Задание 10 */
console.log ('Задание 10');
task = [];
for (i = 0; i<5; i++){ 
    /* Можно было создать функцию, которая бы генерировала массив определенной длины
    в определнном диапазоне, но я подумал об этом слишком поздно, когда уже все написал */
    task.push(Math.round(Math.random()*10));
}
console.log(task);
for (let i = 0; i< task.length; i++){
    if (i===task.length-1) {
        break;     
    } else {
        console.log(`Суммма элемента ${i} и ${i+1} равна ${task[i]+task[i+1]}`);
    }
}

/* Задание 11 */
console.log ('Задание 11');
function square() {
    task = [];
    for (i = 0; i<5; i++){
        task.push(Math.round(Math.random()*10));
    }
    console.log(task);
    const squareResult = task.map(task => task**2);
    return (squareResult);
}
console.log (square());

/* Задание 12 */
console.log ('Задание 12');
function lengthOfWords() {  
    task = ['Hello', 'World', '!!!']
    const length = task.map(task => task.length);
    return length;
}
console.log (lengthOfWords());

/* Задание 13 */
console.log ('Задание 13');
function getRandomArbitrary(min, max) {
    return (Math.round(Math.random() * (max - min) + min));
} /* Взял этот вариант из интернета, потому что не догадался как генерировать отрицательные числа */
function minus() {
    task=[];
    for (i = 0; i<10; i++){
        task.push(getRandomArbitrary(-10,10));
    }
    console.log(task);
    const minusResult = task.filter(task => task<0);
    return (minusResult);
}
console.log(minus());

/* Задание 14 */
console.log ('Задание 14');
task=[];
for (i = 0; i<10; i++){
    task.push(getRandomArbitrary(0,10));
}
console.log(task);
let even = task.filter(task => task % 2 == 0);
console.log(even);

/* Задание 15 */
console.log ('Задание 15');
task =[];
for (i = 0; i<6; i++){
    task.push(getRandomArbitrary(0,10));
}
console.log(task);
let average = task.reduce((summary, currentValue) => summary + currentValue, 0);
console.log(average/task.length);