document.body.addEventListener("click", (event) => {
    let circle = document.createElement("button");
    circle.className = 'circle';
    circle.style.left = `${event.pageX-25}px`;
    circle.style.top = `${event.pageY-25}px`;
    let state = 0;
    circle.addEventListener(
        "click",
        (e) => {
            e.stopPropagation();
            console.log(`OK\nstate: ${state}`);
            if (state == 0) {
                circle.classList.toggle("animation", true);
            } else
            if (state == 1) {
                circle.classList.toggle("animation", false);
            } else
            if (state == 2) {
                circle.classList.toggle("spec", true);
            } else
            if (state == 3) {
                circle.remove();
            }
            state += 1
        }
    )
    document.body.appendChild(circle);
})