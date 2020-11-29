const credits = 23580;

const pricePerDroid = 3000;

let message;

let totalPrice;

const number = prompt('Укажите количество дроидов');

console.log (number);

if (number === null) {
    message = 'Отменено пользователем!';
} else if (isNaN(number)) {
    message = 'Было введено не число, попробуйте еще раз';
} else {
    totalPrice = Number(number) * pricePerDroid;

    totalPrice <= credits ? 
        message = (`Вы купили ${number} дроидов, на счету осталось ${credits - totalPrice} кредитов.`) :
        message = ('Недостаточно средств на счету!');
}

alert(message);

