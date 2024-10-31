function randomInteger(min : number, max : number) {
    // случайное число от min до (max+1)
    let rand : number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log("Задание 2");
var rand_number : string = String(randomInteger(-999999, 999999));
console.log(`Число: ${rand_number}`);
var first_num : string = rand_number[0];
console.log(`Первая цифра: ${first_num}`);
var last_num : string = rand_number[rand_number.length-1];
console.log(`Последняя цифра: ${last_num}`);
var sum_num : number = Number(first_num) + Number(last_num);
console.log(`Сумма первой и последней цифры: ${sum_num}`);
var count_num : number = rand_number.length;
console.log(`Количество цифр в случаном числе: ${count_num}`);