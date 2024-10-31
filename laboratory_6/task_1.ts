console.log("Задание 1");
var arr : Array<string> = ['Привет, ', 'мир',  '!'];
var str : string = '';
arr.forEach(
    (element) => {
        str += element;
    }
)
console.log(`Результирующая строка: ${str}`);