function randomInteger(min : number, max : number) {
    // случайное число от min до (max+1)
    let rand : number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log("Задание 7")
var rand_num_1 : number = randomInteger(1, 50);
var rand_num_2 : number = randomInteger(1, 50);
var rand_num_3 : number = randomInteger(1, 50);
console.log(`Первое число: ${rand_num_1}`);
console.log(`Второе число: ${rand_num_2}`);
console.log(`Третье число: ${rand_num_3}`);
var num : number = (rand_num_1 + rand_num_2 + rand_num_3) / 3;
console.log(`Среднее арифметическое трёх чисел: ${num}`);
var sum : number = rand_num_1*rand_num_1 + rand_num_2*rand_num_2 + rand_num_3*rand_num_3;
console.log(`Сумма квадратов трёх чисел: ${sum}`);
console.log(`Наибольшее среди трёх чисел: ${Math.max(rand_num_1, Math.max(rand_num_2, rand_num_3))}`);
console.log(`Наименьшее среди трёх чисел: ${Math.min(rand_num_1, Math.min(rand_num_2, rand_num_3))}`);