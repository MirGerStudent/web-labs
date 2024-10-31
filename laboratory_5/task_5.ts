function randomInteger(min : number, max : number) {
    // случайное число от min до (max+1)
    let rand : number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log("Задание 5");
var rand_num_1 : number = randomInteger(1, 100);
var rand_num_2 : number = randomInteger(1, 100);
console.log(`Первое число: ${rand_num_1}`);
console.log(`Второе число: ${rand_num_2}`);
var srand_num_1 : string = String(rand_num_1);
var srand_num_2 : string = String(rand_num_2);
console.log(`Первые цифр чисел ${rand_num_1} и ${rand_num_2}:`, srand_num_1[0] == srand_num_2 ? "совпадают" : "не совпадают");
console.log(`Число ${rand_num_1} делится на ${rand_num_2}:`, rand_num_1 % rand_num_2 == 0 ? "без остатка" : "с остатком");
console.log("Большее среди двух чисел:", rand_num_1 > rand_num_2 ? rand_num_1 : rand_num_2);