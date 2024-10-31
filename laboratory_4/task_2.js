console.log("Задача 2");
var arr = ['Привет, ', 'мир',  '!'];
arr[0] = "Пока, ";
var str = "";
arr.forEach(
    (element) => {
        str += element;
    }
)
console.log(`Результирующая строка: `, arr);