const good_question = ["Да", "Одназначно", "Конечно"]; //положительно
const no_good_question = ["Возможно", "Наверное", "Вероятнее всего"]; //неутвердительно положительно
const no_bad_question = ["Кто знает", "Давайте в следующий раз", "Как посмотреть"]; //нейтрально
const bad_question = ["Отрицательно", "Точно не стоит", "Нет"]; //отрицательно

const res_reaction = []

for (let i = 0; i < 3; i++) {
    res_reaction.push(good_question[i]);
    res_reaction.push(no_good_question[i]);
    res_reaction.push(bad_question[i]);
    res_reaction.push(no_bad_question[i]);
}
const ball = document.getElementsByClassName("ball")[0];

window.onload = () => {
    console.log(res_reaction);
    ball.addEventListener("click", () => {
        let res = res_reaction[Math.floor(Math.random() * (res_reaction.length - 1))];
        ball.textContent = res;
        console.log(res);
    });
}