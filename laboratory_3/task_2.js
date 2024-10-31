import {randomInteger} from "./random_number.js"

console.log("Задание 2");
var rand_number = String(randomInteger(-999999, 999999));
console.log(`Число: ${rand_number}`);
var first_num = rand_number[1];
console.log(`Первая цифра: ${first_num}`);
var last_num = rand_number[rand_number.length-1];
console.log(`Последняя цифра: ${last_num}`);
var sum_num = Number(first_num) + Number(last_num);
console.log(`Сумма первой и последней цифры: ${sum_num}`);
var count_num = rand_number.length;
console.log(`Количество цифр в случаном числе: ${count_num}`);