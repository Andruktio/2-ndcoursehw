/* Задание 1 */
let min = (a,b) => {
    if (a<b) {
        return(a);
    } else {
        return(b);
    }
}
/* Проверяю на различных значениях */
console.log(min(8,4));
console.log(min(5,9));
console.log(min(6,6));

/* Задание 2 */
let evenOrOdd = (n) => {
    if (n % 2 === 0) {
        return('Число четное');
    } else {
        return('Число нечетное');
    }
}
let number = Number(prompt('Введите число'));
alert(evenOrOdd(number));

/* Задание 3 */
/* Функция принимает параметром число и выводит в консоль квадрат этого числа */
let sqrt = (x) => console.log(x**2);
sqrt(5); /* Для проверки */
/* Функция принимает параметром число и возвращает квадрат этого числа значением */
let result
let sqrtValue = (y) => {
    result = y**2;
    return(console.log(result));
}
sqrtValue(4); /* Проверяем работу функции */
console.log(result); /* проверяем, что значение лежит в переменной и им можно пользоваться */

/* Задание 4 */
let ageCheck = (a) =>{
    if (a>=13){
        alert('Добро пожаловать!');
    } else if (a>=0 & a<=12) {
        alert('Привет, друг!');
    } else {
        alert('Вы ввели неправильное значение')
    }
}
ageCheck(Number(prompt('Сколько Вам лет?')));

/* Задание 5 */
let numberCorrect = (a,b) =>{
    if (isNaN(a) || isNaN(b)){
        console.log ('Одно или оба значения не являются числом');
    } else {
        console.log(a*b);
    }
}
/*  Для проверки, смотрим как isNan преобразует логические типы данных */
numberCorrect(2,3);
numberCorrect('2',3);
numberCorrect('true',3);
numberCorrect(2, false);

/* Задание 6 */
let userNumber = prompt('Введите число'); /* Сначала сделал запрос числа внутри функции, но от 0 до 10 в ручную проверять лениво */
let numberCheck = (a) => {
    if (isNaN(a)){
        alert('Переданный параметр не является числом');
    } else {
        alert(`${a} в кубе равняется ${a**3}`);
    }
}
numberCheck(userNumber); /* Проверяю работу функции через ручной ввод числа */
/* Создал цикл, который прогонит значения от 0 до 10 сам */
let i=0;
do {numberCheck(i);
    i++;
} while (i<=10);

/* Задание 7 */
function area() { /* Площадь круга по формуле pi*r^2 */
    return (3.14 * this.radius ** 2);
};
function perimeter() { /* Длина окружности, он же периметр окружности, по формуле pi*d, d=2*r  */
    return (3.14 * 2 * this.radius);
};
const circle1 = {
    radius: 3,
    getArea: area,
    getPerimeter: perimeter
};
const circle2 = {
    radius: 5,
    getArea: area,
    getPerimeter: perimeter
};
/* Проверяем */
console.log(`Площадь круга с радиусом ${circle1.radius} равна ${circle1.getArea()}`);
console.log(`Периметр круга с радиусом ${circle1.radius} равна ${circle1.getPerimeter()}`);
console.log(`Площадь круга с радиусом ${circle2.radius} равна ${circle2.getArea()}`);
console.log(`Периметр круга с радиусом ${circle2.radius} равна ${circle2.getPerimeter()}`);

