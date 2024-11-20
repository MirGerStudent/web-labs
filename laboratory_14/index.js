// Поджимали сроки, и к сожалению, код написан с помощью Perplexity.ai(((

const boardElement = document.getElementById('board');
const messageElement = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');
const dogScoreElement = document.getElementById('dogScore');
const catScoreElement = document.getElementById('catScore');
let score_board = document.getElementsByClassName("score_board")[0];
let currentPlayer = 'X';
let board = Array(5).fill(null).map(() => Array(5).fill(null));
let gameActive = true;
let rounds = 0;

// Создание игрового поля
function createBoard() {
    boardElement.innerHTML = '';
    
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
    }
}

// Обработка клика по ячейке
function handleCellClick(event) {
    const cell = event.target;

    const row = cell.dataset.row;
    const col = cell.dataset.col;

    if (board[row][col] || !gameActive) return; // Играть только если ячейка пустая и игра активна

    board[row][col] = currentPlayer; // Записываем текущего игрока в ячейку
    console.log(`${row} ${col}`);
    // cell.textContent = currentPlayer; // Отображаем символ игрока
    cell.style.backgroundImage = currentPlayer === 'O' ? "url(img/dog.jpg)" : "url(img/cat.jpg)";

    if (checkWinner()) {
        messageElement.textContent = `Игрок ${currentPlayer === 'X' ? 'Кошек' : 'Собачек'} победил!`;
        gameActive = false; // Останавливаем игру
        updateScore(currentPlayer);
        return;
    }

    if (isDraw()) {
        messageElement.textContent = 'Ничья!';
        rounds += 1;
        let rounds_tab = document.getElementById("rounds");
        rounds_tab.textContent = rounds;
        gameActive = false; // Останавливаем игру
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Меняем игрока
}

function updateScore(winner) {
    rounds += 1;
    let rounds_tab = document.getElementById("rounds");
    rounds_tab.textContent = rounds
   if (winner === 'X') { // Если выиграла кошка
    //    catWins++;
    //    catScoreElement.textContent = catWins; // Обновляем счет кошки
       catScoreElement.textContent = 1 + Number(catScoreElement.textContent);

   } else { // Если выиграла собака
    //    dogWins++;
    //    dogScoreElement.textContent = dogWins; // Обновляем счет собаки
       dogScoreElement.textContent = 1 + Number(dogScoreElement.textContent);
   }
}

// Проверка на победу
function checkWinner() {
    // Проверка строк и столбцов
    for (let i = 0; i < 5; i++) {
        if (checkLine(board[i]) || checkLine(board.map(row => row[i]))) {
            return true;
        }
    }

    // Проверка диагоналей
    if (
        checkLine([board[0][0], board[1][1], board[2][2]]) ||
        checkLine([board[0][1], board[1][2], board[2][3]]) ||
        checkLine([board[0][2], board[1][3], board[2][4]]) ||
        checkLine([board[0][4], board[1][3], board[2][2]]) ||
        checkLine([board[0][3], board[1][2], board[2][1]]) ||
        checkLine([board[0][2], board[1][1], board[2][0]]) ||
        checkLine([board[1][0], board[2][1], board[3][2]]) ||
        checkLine([board[1][1], board[2][2], board[3][3]]) ||
        checkLine([board[1][2], board[2][3], board[3][4]]) ||
        checkLine([board[1][4], board[2][3], board[3][2]]) ||
        checkLine([board[1][3], board[2][2], board[3][1]]) ||
        checkLine([board[1][2], board[2][1], board[3][0]]) ||
        checkLine([board[2][0], board[3][1], board[4][2]]) ||
        checkLine([board[2][1], board[3][2], board[4][3]]) ||
        checkLine([board[2][2], board[3][3], board[4][4]]) ||
        checkLine([board[2][4], board[3][3], board[4][2]]) ||
        checkLine([board[2][3], board[3][2], board[4][1]]) ||
        checkLine([board[2][2], board[3][1], board[4][0]])
    ) {
        return true;
    }

    return false; // Победителя нет
}

// Проверка линии на наличие трех одинаковых символов
function checkLine(line) {
    let count = 0;
    
    for (let i = 0; i < line.length; i++) {
        if (line[i] === currentPlayer) {
            count++;
            if (count === 3) return true; // Если три в ряд, возвращаем true
        } else {
            count = 0; // Сбрасываем счетчик, если символы разные
        }
    }
    
    return false;
}

// Проверка на ничью
function isDraw() {
    return board.flat().every(cell => cell !== null); // Если все ячейки заполнены
}

// Сброс игры
resetBtn.addEventListener('click', () => {
   board = Array(5).fill(null).map(() => Array(5).fill(null));
   currentPlayer = 'X';
   gameActive = true;
   messageElement.textContent = '';
   createBoard();
});

// Инициализация игры
createBoard();