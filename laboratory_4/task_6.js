import {randomInteger} from "./random_number.js"

console.log("Задача 6");
var arr_with_num = [];
for (var i = 0; i < 10; i++) {
    arr_with_num.push(randomInteger(-10, 10))
}
console.log(`Исходный массив: ${arr_with_num.toString().replaceAll(",", " ")}`);
var sort_app =arr_with_num.sort().reverse();
console.log(`Сортированный массив: ${sort_app.toString().replaceAll(",", " ")}`);