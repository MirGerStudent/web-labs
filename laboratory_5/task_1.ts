function randomInteger(min : number, max : number) {
    // случайное число от min до (max+1)
    let rand : number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

var rand_num : number = randomInteger(-100, 100);
console.log("Задание 1")
console.log("Случайное число:", rand_num)
console.log(`Число ${rand_num}:`, rand_num >= 0 ? `положительное` : `отрицательное`)
console.log(`Число ${rand_num}:`, rand_num % 2 == 0 ? `чётное` : `нечётное`)