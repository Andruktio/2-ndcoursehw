/* Задание 1 */
let password = 'password';
let chek = prompt('Введите пароль:');
(password === chek)? alert(`Пароль введен верно`):alert('Пароль введен неправильно');

/* Задание 2 */
let c = Number(prompt('Введите число'));
(c>0 && c<10)? console.log('Верно'): console.log('Неверно');

/* Задание 3 */
let d = 13;
let e = 105;
(d > 100 || e > 100)? console.log('Верно'): console.log('Неверно');

/* Задание 4 */
let a = '2';
let b = '3';
alert(`Сумма чисел 2 и 3 равна ${Number(a)+Number(b)}`);

/* Задание 5 */
let monthNumber = Number(prompt('Введите номер месяца:'));
switch (true) {
    case monthNumber === 1 || monthNumber === 2 || monthNumber === 12:
        alert('Это зимний месяц');
        break;
    case monthNumber>= 3 && monthNumber<=5:
        alert('Это весенний месяц');
        break;
    case  monthNumber>= 6 && monthNumber<=8:
        alert('Это летний месяц');
        break;
    case monthNumber>= 9 && monthNumber<=11:
        alert('Это осенний месяц');
        break;
    default:
        alert('В году всего 12 месяцев');
        break;
}
