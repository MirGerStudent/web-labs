import {randomInteger} from "./random_number.ts"

console.log("Задача 4");
var arr_with_num : Array<number> = [];
for (var i = 0; i < 10; i++) {
    arr_with_num.push(randomInteger(-999999, 999999));
}
var num_with_five : Array<number> = [];
console.log(`Все числа: ${arr_with_num.toString().replaceAll(",", " ")}`);
arr_with_num.forEach(
    (element) => {
        if ((String(element).includes("5")) != false) {
            num_with_five.push(element);
        }
    }
)
console.log(`Числа с цифрой '5': ${num_with_five.toString().replaceAll(",", " ")}`);