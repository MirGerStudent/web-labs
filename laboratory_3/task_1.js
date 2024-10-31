import {randomInteger} from "./random_number.js"

var rand_num = randomInteger(-100, 100);
console.log("Задание 1")
console.log("Случайное число:", rand_num)
console.log(`Число ${rand_num}:`, rand_num >= 0 ? `положительное` : `отрицательное`)
console.log(`Число ${rand_num}:`, rand_num %2 == 0 ? `чётное` : `нечётное`)