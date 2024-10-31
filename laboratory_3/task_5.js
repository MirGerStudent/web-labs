import {randomInteger} from "./random_number.js"

console.log("Задание 5");
var rand_num_1 = randomInteger(1, 100);
var rand_num_2 = randomInteger(1, 100);
console.log(`Первое число: ${rand_num_1}`);
console.log(`Второе число: ${rand_num_2}`);
var srand_num_1 = String(rand_num_1);
var srand_num_2 = String(rand_num_2);
console.log(`Первые цифр чисел ${rand_num_1} и ${rand_num_2}:`, srand_num_1[0] == srand_num_2 ? "совпадают" : "не совпадают");
console.log(`Число ${rand_num_1} делится на ${rand_num_2}:`, rand_num_1 % rand_num_2 == 0 ? "без остатка" : "с остатком");
console.log("Большее среди двух чисел:", rand_num_1 > rand_num_2 ? rand_num_1 : rand_num_2);