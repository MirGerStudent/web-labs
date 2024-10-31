console.log("Задача 3")
var str : string= '023m0df0dfg0';
var zero_in_str : Array<string> = [];
for (var i : number = 0; i < str.length; i++) {
    if (str[i] == '0') {
        zero_in_str.push((i + 1).toString());
    }
}
console.log(`Позиции нулей: ${zero_in_str.toString().replaceAll(",", " ")}`)