window.onload = () => {
    console.log("Hello!");

    const puzzle_elements = document.getElementsByClassName("element");
    var rotate_degs = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var degs = [0, 90, 180, 270];
    var deg = 0;
    const rand_deg = () => {
        return degs[Math.floor(1 + Math.random() * (degs.length-1))];
    }
    const check = () => {
        var check = true
        for (var i = 0; i < rotate_degs.length; i++) {
            if (rotate_degs[i] != 0) {
                check = false;
            }
        }
        return check;
    }

    for (let index = 0; index < puzzle_elements.length; index++) {
        puzzle_elements[index].style.backgroundImage = "url(img/" + (index + 1) + ".png)";
        puzzle_elements[index].style.backgroundSize = "cover";
        deg = rand_deg();
        rotate_degs[index] = deg;
        puzzle_elements[index].style.transform = "rotate(" + deg + "deg)";
        puzzle_elements[index].addEventListener('click', () => {
            if (rotate_degs[index] != 0) {
                puzzle_elements[index].style.transform = 'rotate(' + (rotate_degs[index] + 90) % 360 +'deg)';
                rotate_degs[index] = (rotate_degs[index] + 90) % 360;
                console.log(rotate_degs.toString().replaceAll(",", " "));
            }
            if (check()) {
                console.log("Good!");
                var finish_div = document.createElement("div");
                finish_div.textContent = "Конец!";
                finish_div.classList.toggle("finish_div", true);
                document.getElementsByTagName('body')[0].appendChild(finish_div);

                var new_button = document.createElement("button");
                new_button.textContent = "Начать заново";
                new_button.classList.toggle("button_new", true);
                finish_div.appendChild(new_button);
                new_button.addEventListener("click", () => {
                    for (let index = 0; index < puzzle_elements.length; index++) {
                        deg = rand_deg();
                        rotate_degs[index] = deg;
                        puzzle_elements[index].style.transform = "rotate(" + deg + "deg)";
                    }
                    finish_div.remove();
                    new_button.remove();
                });
            }
        });
    }

    console.log("start state: " + rotate_degs.toString().replaceAll(",", " "));
}