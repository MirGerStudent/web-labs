window.onload = () => {
    var state = 0;

    const circle = document.getElementsByClassName("circle")[0];
    if (circle) {
        circle.addEventListener(
            "click",
            () => {
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
        );
    } else {
        console.log("Nea(((")
    }
}