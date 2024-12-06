const input_number = document.getElementById("input_number");
const submit_btn = document.getElementsByClassName("btn")[0];
const table = document.getElementsByClassName("records")[0];
const tbody = table.getElementsByTagName("tbody")[0];

const generateUniqueNumber = () => {
  let number;
  let digits;

  do {
    number = Math.floor(1000 + Math.random() * 9000);
    digits = number.toString().split("");
  } while (new Set(digits).size !== digits.length);

  return number;
};

let progress = 0;
let cow = 0;
let bull = 0;
let numeric = "1000";
let start_num = generateUniqueNumber();

const score_update = () => {
  bull = 0;
  cow = 0;
  numeric = input_number.value;
  progress += 1;

  if (new Set(numeric).size !== numeric.length || numeric.length !== 4) {
    alert("Введите корректное число!");
  } else {
    for (let i = 0; i < 4; i++) {
      if (start_num.toString()[i] === numeric.toString()[i]) {
        bull += 1;
      } else if (String(start_num).includes(String(numeric)[i])) {
        cow += 1;
      }
    }

    let progress_th = document.createElement("th");
    let numeric_th = document.createElement("th");
    let bull_th = document.createElement("th");
    let cow_th = document.createElement("th");

    progress_th.textContent = progress;
    numeric_th.textContent = numeric;
    bull_th.textContent = bull;
    cow_th.textContent = cow;

    let line = document.createElement("tr");
    line.classList.add("line");
    line.appendChild(progress_th);
    line.appendChild(numeric_th);
    line.appendChild(bull_th);
    line.appendChild(cow_th);

    tbody.appendChild(line);
  }
};

window.onload = () => {
  console.log(start_num);

    submit_btn.addEventListener("click", () => {
        console.log(input_number.value);
        score_update();
        if (bull == 4) {
            submit_btn.textContent = "Начать заново";
            setTimeout(() => {
                window.location.reload();
            },5000)
        }
  });
};

document.getElementById("rulesButton").addEventListener("click", function () {
  const rulesText = document.getElementById("rulesText");

  // Переключаем видимость текста правил
  if (rulesText.style.display === "none" || rulesText.style.display === "") {
    rulesText.style.display = "block"; // Показываем текст
    this.textContent = "Скрыть правила"; // Меняем текст кнопки
  } else {
    rulesText.style.display = "none"; // Скрываем текст
    this.textContent = "Правила игры"; // Меняем текст кнопки обратно
  }
});
