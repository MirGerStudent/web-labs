console.log("Задача 5")
function merge(arr1, arr2) {
    var res_arr = [];
    for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1.length >= i) {
            res_arr.push(arr1[i]);
        }
        if (arr1.length >= i) {
            res_arr.push(arr2[i]);
        }
    }
    return res_arr;
}
var arr1 = ["1", "2", "3"];
console.log(`Первый массив: ${arr1.toString().replaceAll(",", " ")}`);
var arr2 = ["a", "b", "c"];
console.log(`Второй массив: ${arr2.toString().replaceAll(",", " ")}`);
var result_arr = merge(arr1, arr2);
console.log(`Результирующий массив: ${result_arr.toString().replaceAll(",", " ")}`);