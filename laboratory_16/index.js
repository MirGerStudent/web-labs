const keys = document.getElementsByClassName("num_elem");
const pincode_1 = document.getElementById("pin_1");
const pincode_2 = document.getElementById("pin_2");

let state = 0;
let pin_1_input = "";
let pin_2_input = "";

const checkPIN = () => {
    let OK = 0;
    for (let i = 0; i < 6; i++) {
        if (pin_1_input[i] !== pin_2_input[i]) {
            OK += 1;
        }
    }
    return OK;
}

window.onload = () => {
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", () => {
            console.log(keys[i].textContent)
            if (state === 0 && keys[i].classList.contains("num")) {
                pincode_1.value += keys[i].textContent;
            } else
            if (state === 0 && keys[i].classList.contains("clear")) {
                pincode_1.value = String(pincode_1.value).slice(0, -1);
            } else 
            if (state === 0 && keys[i].classList.contains("enter")) {
                state += 1;
                pin_1_input = pincode_1.value;
                console.log(state);
            } else
            if (state === 1 && keys[i].classList.contains("num")) {
                pincode_2.value += keys[i].textContent;
            } else
            if (state === 1 && keys[i].classList.contains("clear")) {
                pincode_2.value = String(pincode_2.value).slice(0, -1);
            } else
            if (state === 1 && keys[i].classList.contains("enter")) {
                state += 1;
                pin_2_input = pincode_2.value;
                console.log(state);
            } else
            if (state === 2 && keys[i].classList.contains("enter")) {
                console.log(state);
                if (checkPIN() === 0) {
                    alert("Правильно");
                } else {
                    alert(`Не совподают ${checkPIN()} цифры(а)`)
                }
            }
        });
    }
}