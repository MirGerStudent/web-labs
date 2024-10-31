console.log("Задание 3");
var str = "deleveled level";
console.log(`Строка: ${str}`); 
console.log(`Длина строки: ${str.length}`);
console.log(`Последний символ строки: ${str[str.length-1]}`);
console.log("Строка в обратном порядке: ");
var reversSTR = "";
for (var i = str.length-1; i >= 0; i--) {
    reversSTR += str[i];
}
console.log(`${reversSTR}`);