import {randomInteger} from "./random_number.js"

console.log("Задача 6");
var arr_with_num : Number[] = [];
for (var i = 0; i < 10; i++) {
    arr_with_num.push(randomInteger(-10, 10))
}
function buble_sort(arr : any[]) {
    var size : number = arr.length;
    for (var i = size; i>=0; i--) {
        for (var j = 0; j<=(i-1); j++)
            if (arr[j]>arr[j+1]) {
                var k = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = k;
        }
    }
    return arr;
}
var arr_with_num_str : any = arr_with_num.toString();
console.log(`Исходный массив: ${arr_with_num_str.replaceAll(",", " ")}`);
var sort_app : any = buble_sort(arr_with_num).toString();
console.log(`Сортированный массив: ${sort_app.replaceAll(",", " ")}`);