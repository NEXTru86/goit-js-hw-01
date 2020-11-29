let costOfDelivery;

const china = 'КИТАЙ';
const chile = 'ЧИЛИ';
const australia = 'АВСТРАЛИЯ';
const india = 'ИНДИЯ';
const jamaica = 'ЯМАЙКА';

let message;

let country = prompt('Введите страну доставки');

country = country.toUpperCase();

console.log(country);

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