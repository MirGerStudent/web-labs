let answers = document.getElementsByClassName("answers")[0];
let question = document.getElementsByClassName("question")[0];
let answer_button = document.getElementsByClassName("check_answer")[0];
let score = 0;

window.onload = () => {
    let curr_question = 0;
    loadQuestion(curr_question);

    answer_button.addEventListener("click", () => {
        console.log(`Question: ${curr_question}\nScore: ${score}`)
        if (curr_question < quiz.length) {
            if (quiz[curr_question]["type"] === "multiple-choice") {
                for (let i = 0; i < 4; i++) {
                    if (answers.childNodes[i].classList.contains("selected")
                        && (answers.childNodes[i].textContent === quiz[curr_question]["correct_answer"])) {
                        score += 1;
                        console.log("good");
                    }
                    answers.childNodes[i].classList.remove("selected");
                }
                curr_question += 1;

                for (let i = 0; i < 4; i++) {
                    answers.removeChild(answers.firstChild)
                }

                loadQuestion(curr_question);
            }
            else if (quiz[curr_question]["type"] === "inline-choice") {
                console.log("goodLOL");
                const userAnswer = document.getElementsByClassName(`inline-answer`)[0].value;
                if (userAnswer.trim() === quiz[curr_question]["correct_answer"]) {
                    score += 1;
                    console.log("good");
                }
                curr_question += 1;
                answers.removeChild(answers.firstChild)
                loadQuestion(curr_question);
            }
        } else {
            answer_button.textContent = "Ответить";
            answers.textContent = "";
            curr_question = 0;
            loadQuestion(curr_question);
        }
    })
};

const loadQuestion = (curr_question) => {
    if (curr_question < quiz.length) {
        if (quiz[curr_question]["type"] === "multiple-choice") {
            question.textContent = `${quiz[curr_question]["question"]}`;
            for (let i = 0; i < 4; i++) {
                let answer = document.createElement("button");
                answer.className = "answer";
                answer.textContent = `${quiz[curr_question]["answers"][i]}`;

                answer.addEventListener("click", () => {
                    for (let k = 0; k < 4; k++) {
                        answers.childNodes[k].classList.remove("selected");
                    }
                    answer.classList.add("selected");
                })
                answers.appendChild(answer)
            }

        } else
            if (quiz[curr_question]["type"] === "inline-choice") {
                question.textContent = `${quiz[curr_question]["question"]}`;
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.placeholder = 'Введите ваш ответ';
                inputField.className = "inline-answer";
                answers.appendChild(inputField);
        }
    } else {
        answer_button.textContent = "Начать заново";
        question.textContent = "Вы прошли викторину!";
        answers.textContent = `Ваш счёт: ${score}/${quiz.length}`;
    }
}

const quiz = [
    {
        "question": "Какой язык программирования используется для создания интерактивности на веб-страницах?",
        "type": "multiple-choice",
        "answers": [
            "JavaScript",
            "HTML",
            "CSS",
            "PHP"
        ],
        "correct_answer": "JavaScript"
    },
    {
        "question": "Что такое HTML?",
        "type": "multiple-choice",
        "answers": [
            "Язык разметки для создания веб-страниц",
            "Язык программирования",
            "Система управления базами данных",
            "Фреймворк для JavaScript"
        ],
        "correct_answer": "Язык разметки для создания веб-страниц"
    },
    {
        "question": "Какой из следующих фреймворков является JavaScript-фреймворком?",
        "type": "multiple-choice",
        "answers": [
            "React",
            "Django",
            "Ruby on Rails",
            "Flask"
        ],
        "correct_answer": "React"
    },
    {
        "question": "Какой тег используется для создания гиперссылки в HTML?",
        "type": "multiple-choice",
        "answers": [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        "correct_answer": "<a>"
    },
    {
        "question": "Что такое CSS?",
        "type": "multiple-choice",
        "answers": [
            "Каскадные таблицы стилей",
            "Язык программирования",
            "Система управления базами данных",
            "Язык разметки"
        ],
        "correct_answer": "Каскадные таблицы стилей"
    },
    {
        "question": "Какой атрибут используется для указания адреса ссылки в теге <a>?",
        "type": "multiple-choice",
        "answers": [
            "href",
            "src",
            "link",
            "url"
        ],
        "correct_answer": "href"
    },
    {
        "question": "Что такое AJAX?",
        "type": "multiple-choice",
        "answers": [
            "Технология для асинхронной загрузки данных на веб-страницах",
            "Язык программирования",
            "Фреймворк для JavaScript",
            "Система управления базами данных"
        ],
        "correct_answer": "Технология для асинхронной загрузки данных на веб-страницах"
    },
    {
        "question": "Какой метод HTTP используется для получения данных с сервера?",
        "type": "multiple-choice",
        "answers": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "correct_answer": "GET"
    },
    {
        "question": "Какой тег используется для вставки изображения в HTML?",
        "type": "multiple-choice",
        "answers": [
            "<img>",
            "<image>",
            "<src>",
            "<picture>"
        ],
        "correct_answer": "<img>"
    },
    {
        "question": "Какой из следующих языков является языком серверного программирования?",
        "type": "multiple-choice",
        "answers": [
            "PHP",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "correct_answer": "PHP"
    },
    {
        "question": "Какой язык программирования используется для создания интерактивности на веб-страницах?",
        "type": "multiple-choice",
        "answers": [
            "JavaScript",
            "HTML",
            "CSS",
            "PHP"
        ],
        "correct_answer": "JavaScript"
    },
    {
        "question": "Что такое HTML?",
        "type": "multiple-choice",
        "answers": [
            "Язык разметки для создания веб-страниц",
            "Язык программирования",
            "Система управления базами данных",
            "Фреймворк для JavaScript"
        ],
        "correct_answer": "Язык разметки для создания веб-страниц"
    },
    {
        "question": "Какой из следующих фреймворков является JavaScript-фреймворком?",
        "type": "multiple-choice",
        "answers": [
            "React",
            "Django",
            "Ruby on Rails",
            "Flask"
        ],
        "correct_answer": "React"
    },
    {
        "question": "Какой тег используется для создания гиперссылки в HTML?",
        "type": "multiple-choice",
        "answers": [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        "correct_answer": "<a>"
    },
    {
        "question": "Что такое CSS?",
        "type": "multiple-choice",
        "answers": [
            "Каскадные таблицы стилей",
            "Язык программирования",
            "Система управления базами данных",
            "Язык разметки"
        ],
        "correct_answer": "Каскадные таблицы стилей"
    },
    {
        "question": "Какой метод HTTP используется для отправки данных на сервер?",
        "type": "multiple-choice",
        "answers": [
            "POST",
            "GET",
            "PUT",
            "DELETE"
        ],
        "correct_answer": "POST"
    },
    {
        "question": "Что такое CORS?",
        "type": "multiple-choice",
        "answers": [
            "Cross-Origin Resource Sharing",
            "Content Origin Resource Security",
            "Cross-Origin Request Security",
            "Content Origin Resource Sharing"
        ],
        "correct_answer": "Cross-Origin Resource Sharing"
    },
    {
        "question": "Какой тег используется для создания списка с нумерацией в HTML?",
        "type": "multiple-choice",
        "answers": [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        "correct_answer": "<ol>"
    },
    // {
    //     "question": "Что такое responsive design?",
    //     "type": "multiple-choice",
    //     "answers": [
    //         "Адаптивный дизайн, который изменяет макет в зависимости от размера экрана",
    //         "Статический дизайн, который не изменяется в зависимости от устройства",
    //         "Дизайн, который использует только фиксированные размеры",
    //         "Дизайн, который работает только на мобильных устройствах"
    //     ],
    //     "correct_answer": "Адаптивный дизайн, который изменяет макет в зависимости от размера экрана"
    // },
    {
        "question": "Что выведет следующий код? console.log(0.1 + 0.2)",
        "type": "inline-choice",
        "correct_answer" : "0.30000000000000004"
    },
    {
        "question": "Какой из следующих языков является языком разметки?",
        "type": "multiple-choice",
        "answers": [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],
        "correct_answer": "HTML"
    },
];