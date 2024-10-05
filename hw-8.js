/* Задание 1 */
let people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

/* Задание 2 */
function isPositive(x) {
    return x > 0;
}
function isMale(people) {
    return people.gender === 'male';
}
function filter(arr, ruleFunction) {
    const newArr = [];  
    for (let i = 0; i < arr.length; ++i) {
        if (ruleFunction(arr[i])) {
            newArr.push(arr[i]);
        }
    }   
    return newArr;
}
console.log(filter([3, -4, 1, 9], isPositive));
people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
console.log(filter(people, isMale));

/* Задание 3 */
function currentTime() {
    let date = new Date();
    console.log(date);
}
const interval = setInterval(currentTime, 3000);
setTimeout(() => {
    clearInterval(interval); 
    console.log('30 секунд прошло');
}, 30000); 

/* Задание 4 */
function delayForSecond(callback) {
    setTimeout(callback, 1000);
    callback();
}
delayForSecond(function () {
   console.log('Привет, Глеб!');
})

/* Задание 5 */
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(function () {sayHi('Глеб')});

