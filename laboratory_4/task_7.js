console.log("Задача 7");
var rus_days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
var eng_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(`Исходный массив на русском: ${rus_days.toString().replaceAll(",", " ")}`);
console.log(`Исходный массив на английском: ${eng_days.toString().replaceAll(",", " ")}`);
console.log(`Отсортированный массив на русском: ${rus_days.sort().toString().replaceAll(",", " ")}`);
console.log(`Отсортированный массив на английском: ${eng_days.sort().toString().replaceAll(",", " ")}`);