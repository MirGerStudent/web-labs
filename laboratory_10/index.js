window.onload = () => {
    let time = 0; //3590000;
    let timerID = 0;
    let startState = false;

    let startButton = document.getElementById("start");
    let clearButton = document.getElementById("clear");
    let zeroButton = document.getElementById("zero");
    let list = document.getElementById("list");
    let counter = 0;

    startButton.addEventListener("click", () => {
        if (!startState) {
            startButton.textContent = "Стоп";
            timerID = setInterval(() => {
                document.getElementById("time").textContent = timerFunction(time);
                time += 10;
            }, 10);
            startState = true;
        } else {
            clearInterval(timerID);
            startButton.textContent = "Старт";
            startState = false;
            counter += 1;
            console.log(list);
            list.appendChild(createNewListElement(counter, time));
        }
    });
    clearButton.addEventListener("click", () => {
        console.log(time);
        time = 0;
        counter = 0;
        document.getElementById("time").textContent = timerFunction(time);
        document.querySelectorAll(".save_time").forEach(
            element => element.remove()
        );
    });
    zeroButton.addEventListener("click", () => {
        time = 0;
        document.getElementById("time").textContent = timerFunction(time);
    });
}

const timerFunction = (time) =>  {
    miliseconds = String(time % 1000).padStart(3, '0');
    seconds = String(~~(time / 1000) % 60).padStart(2, '0');
    minutes = String(~~(time / 60000) % 60).padStart(2, '0');
    hours = String(~~(time / 3600000) % 360).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}:${miliseconds}`;
}

const createNewListElement = (counter, time) => {
    let new_list_element = document.createElement("p");
    new_list_element.className = "save_time";
    new_list_element.textContent = `${counter}\t\t\t\t${timerFunction(time)}`;
    return new_list_element;
}