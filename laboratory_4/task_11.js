import { randomInteger } from "./random_number.js";

console.log("Задание 11");
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(randomInteger(-50, 50));
}
console.log(`Исходный массив: ${arr.toString().replaceAll(",", " ")}`);
var filtered_arr = arr.filter(
    (element) => {
        return (element > 0) & (Number(element) % 2 == 0);
    }
)
console.log(`Обработанный массив: ${filtered_arr.toString().replaceAll(",", " ")}`);