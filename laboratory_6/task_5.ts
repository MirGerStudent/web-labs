console.log("Задача 5")
function merge(arr1 : Array<string>, arr2 : Array<string>) {
    var res_arr : Array<string> = [];
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
var arr1 : Array<string> = ["1", "2", "3"];
var arr1_str : any = arr1.toString();
console.log(`Первый массив: ${arr1_str.replaceAll(",", " ")}`);
var arr2 : Array<string> = ["a", "b", "c"];
var arr2_str : any = arr2.toString();
console.log(`Второй массив: ${arr2_str.replaceAll(",", " ")}`);
var result_arr : Array<string> = merge(arr1, arr2);
var result_arr_str : any = result_arr.toString();
console.log(`Результирующий массив: ${result_arr_str.replaceAll(",", " ")}`);