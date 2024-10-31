console.log("Задание 1");
var arr = ['Привет, ', 'мир',  '!'];
var str = '';
arr.forEach(
    (element) => {
        str += element;
    }
)
console.log(`Результирующая строка: ${str}`);