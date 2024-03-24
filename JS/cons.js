const pop_ups = document.querySelectorAll(".pop_up")
for (const pop_up of pop_ups) {
    pop_up.addEventListener("click", function (evt) {
        pop_up.classList.toggle("hide")
    });
}
