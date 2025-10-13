const title = 'Lesson02';
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 65;
const rollback = 43;
const fullPrice = 287;
const adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));

console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`);

const lower = screens.toLowerCase();
const array = lower.split(", ");
console.log(array);

console.log (fullPrice * (rollback/100));
