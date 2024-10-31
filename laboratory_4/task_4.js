import {randomInteger} from "./random_number.js"

console.log("Задача 4");
var arr_with_num = [];
for (var i = 0; i < 10; i++) {
    arr_with_num.push(randomInteger(-999999, 999999));
}
var num_with_five = [];
var res = '';
arr_with_num.forEach(
    (elem) => {
        res += `${elem} `
    }
)
console.log(`Все числа: ${res}`);
arr_with_num.forEach(
    (element) => {
        if ((String(element).includes("-")) != false) {
            num_with_five.push(element);
        }
    }
)
// foreach($arr_with_num as $element) {
//     if (strpos((string)$element, '5') !== false) {
//         array_push($num_with_five, $element);
//     }
// }
res = '';
num_with_five.forEach(
    (elem) => {
        res += `${elem} `;
    }
)
console.log(`Числа с цифрой '5': `, num_with_five);