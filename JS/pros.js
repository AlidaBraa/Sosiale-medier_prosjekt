//function toggleImage() {
   // var bilde = document.getElementById('nettvett-img');
    //bilde.classList.toggle('visible');
//}

//function menu() {
  //  const linker = document.getElementById("linker")
    //linker.classList.toggle("show")
//}

function toggleImage() {
    var bilde = document.getElementById('nettvett-img');
    bilde.classList.toggle('visible');
    if (bilde.classList.contains('visible')) {
        bilde.style.display = 'block'; // Viser bildet når det blir synlig
    } else {
        setTimeout(function() {
            bilde.style.display = 'none'; // Skjuler bildet etter at overgangen er fullført
        }, 500); // Endre dette tilsvarende overgangstiden i millisekunder
    }
}
