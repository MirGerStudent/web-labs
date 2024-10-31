function randomInteger(min : number, max : number) {
    // случайное число от min до (max+1)
    let rand : number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log("Задание 6");
var rand_num_1 : number = randomInteger(1, 100);
var rand_num_2 : number = randomInteger(1, 100);
console.log(`Первое число: ${rand_num_1}`);
console.log(`Второе число: ${rand_num_2}`);
console.log(`Остаток от деления числа ${rand_num_1} на ${rand_num_2}:`, rand_num_1 % rand_num_2);
console.log(`Сумма чисел: ${rand_num_1 + rand_num_2}`);
console.log(`Произведение чисел: ${rand_num_1 * rand_num_2}`);