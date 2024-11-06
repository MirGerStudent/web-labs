let current_slide = 0;
let slides = document.getElementsByClassName("slide");
let slide_buttons = document.getElementsByClassName("slide__button");

window.onload = (() => {
    for (let i = 0; i < 8; i++) {
        slides[i].style.backgroundImage = "url(img/" + (i + 1) + ".jpg)";
        slides[i].style.backgroundSize = "cover";
        slide_buttons[i].addEventListener("click", () => {
            current_slide = i;
            updateSlide(i);
        })
    }
    setInterval(() => {
    current_slide = ((current_slide % 8) + 1);
    updateSlide(current_slide - 1);
    }, 6000)
})

document.getElementsByClassName("prev")[0].addEventListener("click", () => {
    current_slide = ((current_slide + 6) % 8 + 1);
    updateSlide(current_slide - 1);
})

document.getElementsByClassName("next")[0].addEventListener("click", () => {
    current_slide = ((current_slide % 8) + 1);
    updateSlide(current_slide - 1);
})

const updateSlide = (slide) => {
    document.querySelector('.images').style.transform = "translateX(" + -slide + "00%)";
    for (let i = 0; i < slides.length; i++) {
        slide_buttons[i].style.background = "black";
    }
    slide_buttons[slide].style.background = "blue";
}
