/* Задание 1 */
let i = 0;
while (i<2) {
    console.log('Привет');
    i++;
}

/* Задание 2 */
i = 1;
while (i<=5) {
    console.log(i);
    i++;
}

/* Задание 3 */
for (let i = 7; i<=22;i++){
    console.log(i)
}

/* Задание 4 */
const obj = {
    "Коля": '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let key in obj){
    console.log(`${key} - зарплата ${obj[key]}$`)
}

/* Задание 5 */
let n = 1000;
i=0;
do{ n/=2,
    i++
} while(n>=50);
console.log(`Результат деления равен ${n}, 
количество итераций равно ${i}`);

/* Задание 6 */
let fistFriday = Number(prompt('Введите номер первой пятницы месяца'));
if (fistFriday>7) {
    alert(`${fistFriday}-е число не может быть первой пятницей в месяце`)
} else { do{alert(`Сегодня пятница, ${fistFriday}-е число. Необходимо подготовить отчет`),
fistFriday+=7
} while(fistFriday<=31);
}
