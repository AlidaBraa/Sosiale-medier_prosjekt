function toggleImage() {
    var bilde = document.getElementById('nettvett-img');
    bilde.classList.toggle('visible');
    if (bilde.classList.contains('visible')) {
        bilde.style.display = 'block'; // Viser bildet når det er synlig
    } else {
        setTimeout(function() {
            bilde.style.display = 'none'; // Skjuler bildet når overgangen slutter
        }, 500); // Overgangstiden
    }
}
