console.log(`Задание 12`);
var str : string = "lol1lol0lol9lol";
function findFirstDigit(str) {
    const match = str.match(/\d/);
    return match ? match.index : -1;
}
function findLastDigit(str) {
    const match = str.match(/\d+/g);
    return match ? str.lastIndexOf(match[match.length-1]) : -1;
}
console.log(`Исходная строка: ${str}`);
console.log(`Первое число: ${findFirstDigit(str)+1}`);
console.log(`Последние число: ${findLastDigit(str)+1}`);