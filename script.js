// const title = 'Lesson02';
// const screens = "Простые, Сложные, Интерактивные";
// const screenPrice = 65;
// const rollback = 43;
// const fullPrice = 287;
// const adaptive = true;

// console.log(typeof(title));
// console.log(typeof(fullPrice));
// console.log(typeof(adaptive));

// console.log(screens.length);
// console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
// console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);

// const lower = screens.toLowerCase();
// const array = lower.split(", ");
// console.log(array);

// console.log (fullPrice * (rollback/100));


const title = prompt("Как называется ваш проект?");
console.log(title);

const screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);

const screenPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);

const adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(Boolean(adaptive));

const service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
const servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1);

const service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
const servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

const servicePercentPrice = Math.ceil(fullPrice * 0.88); // 12% откат
console.log(servicePercentPrice);


if (fullPrice > 30000){
    console.log("Даем скидку в 10%");
}
else if(fullPrice > 15000 && fullPrice <= 30000){
    console.log("Даем скидку в 5%");
}

else if (fullPrice <= 15000 && fullPrice >= 0){
    console.log("Скидка не предусмотрена");
}

else{
    console.log("Что то пошло не так");
}