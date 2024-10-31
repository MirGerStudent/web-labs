console.log("Задание 8");
var arr = ["orange", "red", "green", "blue"];
console.log(`Исходный массив: ${arr.toString().replaceAll(",", " ")}`);
var sorted_arr = arr.sort(
    function(a, b)  {
        return b.length - a.length
    }
)
console.log(`Отсортированный массив: ${sorted_arr.toString().replaceAll(",", " ")}`);
