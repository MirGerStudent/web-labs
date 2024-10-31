import {randomInteger} from "./random_number.ts"

console.log("Задание 10");
var arr : Array<number> = [];
for (var i = 0; i < 10; i++) {
    arr.push(randomInteger(-100, 100));
}
var count_num : number = 0;
for (var i = 0; i < 10; i++) {
    if (arr[i] < 0) {
        count_num++;
    }
}
console.log(`Исходный массив: ${arr.toString().replaceAll(",", " ")}`);
console.log(`Количество отрицательных чисел: ${count_num}`);