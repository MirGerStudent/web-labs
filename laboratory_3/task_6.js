import {randomInteger} from "./random_number.js"

console.log("Задание 6");
var rand_num_1 = randomInteger(1, 100);
var rand_num_2 = randomInteger(1, 100);
console.log(`Первое число: ${rand_num_1}`);
console.log(`Второе число: ${rand_num_2}`);
console.log(`Остаток от деления числа ${rand_num_1} на ${rand_num_2}:`, rand_num_1 % rand_num_2);
console.log(`Сумма чисел: ${rand_num_1 + rand_num_2}`);
console.log(`Произведение чисел: ${rand_num_1 * rand_num_2}`);