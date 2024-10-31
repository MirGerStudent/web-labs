console.log(`Задание 12`);
var str = "lol1lol0lol9lol";
function findFirstDigit(str) {
    const match = str.match(/\d/);
    return match ? match.index : -1;
}
function findLastDigit(str) {
    var res = -1;
    const matches = Array.from(str.matchAll(/\d+/g));
    for (var i = 0; i < str.length; i++) {
        if (Array.from(str)[i] == matches[matches.length - 1]){
            res = str.lastIndexOf(Array.from(str)[i]);
        }
    }
    return res;
}
console.log(`Исходная строка: ${str}`);
console.log(`Первое число: ${findFirstDigit(str)+1}`);
console.log(`Последние число: ${findLastDigit(str)+1}`);