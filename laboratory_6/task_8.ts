console.log("Задание 8");
var arr : string[] = ["orange", "red", "green", "blue"];
var arr_str : any = arr.toString();
console.log(`Исходный массив: ${arr_str.replaceAll(",", " ")}`);
var sorted_arr = arr.sort(
    function(a, b)  {
        return b.length - a.length
    }
)
console.log(`Отсортированный массив: ${sorted_arr.toString().replaceAll(",", " ")}`);
