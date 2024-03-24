const accordion = document.getElementById("accordion");
const arrow = document.querySelector("#arrowIcon2")
accordion.addEventListener("click", function () {
    accordion.classList.toggle("active");
    const panel = document.getElementById("panel");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        arrow.classList.remove('rotate180')
        arrow.style.transition = '1s ease'
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        arrow.classList.add('rotate180')
    }
});
