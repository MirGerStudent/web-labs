import {randomInteger} from "./random_number.js"

console.log("Задание 7")
var rand_num_1 = randomInteger(1, 50);
var rand_num_2 = randomInteger(1, 50);
var rand_num_3 = randomInteger(1, 50);
console.log(`Первое число: ${rand_num_1}`);
console.log(`Второе число: ${rand_num_2}`);
console.log(`Третье число: ${rand_num_3}`);
var num = (rand_num_1 + rand_num_2 + rand_num_3) / 3;
console.log(`Среднее арифметическое трёх чисел: ${num}`);
var sum = rand_num_1*rand_num_1 + rand_num_2*rand_num_2 + rand_num_3*rand_num_3;
console.log(`Сумма квадратов трёх чисел: ${sum}`);
console.log(`Наибольшее среди трёх чисел: ${(rand_num_1 > rand_num_2 ? rand_num_1 : rand_num_2) > rand_num_3 ? (rand_num_1 > rand_num_2 ? rand_num_1 : rand_num_2) : rand_num_3}`);
console.log(`Наименьшее среди трёх чисел: ${(rand_num_1 < rand_num_2 ? rand_num_2 : rand_num_1) > rand_num_3 ? rand_num_3 : (rand_num_1 > rand_num_2 ? rand_num_2 : rand_num_1)}`);