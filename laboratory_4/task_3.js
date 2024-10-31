console.log("Задача 3")
var str = '023m0df0dfg0';
var zero_in_str = [];
var i = 0;
for (i = 0; i < str.length; i++) {
    if (str[i] == '0') {
        zero_in_str.push(i);
    }
}
var res = "";
zero_in_str.forEach(
    (elem) => {
        res += elem;
    }
)
console.log(`Позиции нулей: `, zero_in_str)