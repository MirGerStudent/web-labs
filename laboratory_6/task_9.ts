import {randomInteger} from "./random_number.ts"

console.log("Задание 9");
var arr : Array<number> = [];
for (var i = 0; i < 8; i++) {
    arr.push(randomInteger(0, 50))
}
var sum_1 : number = 0;
var sum_2 : number = 0;
for (i = 0; i < arr.length/2; i++) {
    sum_1 += arr[i];
    sum_2 += arr[i + 4];
}
var res = sum_1 / sum_2;
console.log(`Сгенерированные числа: ${arr.toString().replaceAll(",", " ")}`);
console.log(`Сумма первой половины массива: ${sum_1}`);
console.log(`Сумма второй половины массива: ${sum_2}`);
console.log(`Частное: ${res}`);