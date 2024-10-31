console.log("Задача 2");
var arr : Array<string> = ['Привет, ', 'мир',  '!'];
arr[0] = "Пока, ";
var str : string = "";
arr.forEach(
    (element) => {
        str += element;
    }
)
console.log(`Результирующая строка: ${str}`);