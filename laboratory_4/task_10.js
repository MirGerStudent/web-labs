import {randomInteger} from "./random_number.js"

console.log("Задание 10");
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(randomInteger(-100, 100));
}
var count_num = 0;
for (var i = 0; i < 10; i++) {
    if (arr[i] < 0) {
        count_num++;
    }
}
console.log(`Исходный массив: ${arr.toString().replaceAll(",", " ")}`);
console.log(`Количество отрицательных чисел: ${count_num}`);