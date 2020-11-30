let costOfDelivery;

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

let message;

let country = prompt('Введите страну доставки');

if (country === null) {
    alert('Отменено пользователем!');
}
else {
    country = country.toLowerCase();

    switch (country) {
        case china:
            costOfDelivery = 100;
            country = 'Китай';
            message = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
            break;
        
        case chile:
            costOfDelivery = 250;
            country = 'Чили';
            message = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
            break;
        
        case australia:
            costOfDelivery = 170;
            country = 'Австралию';
            message = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
            break;
        
        case india:
            costOfDelivery = 80;
            country = 'Индию';
            message = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
            break;
        
        case jamaica:
            costOfDelivery = 120;
            country = 'Ямайку';
            message = `Доставка в ${country} будет стоить ${costOfDelivery} кредитов`;
            break;
        
        default:
            message = 'В вашей стране доставка не доступна';
    }

        alert(message);

}