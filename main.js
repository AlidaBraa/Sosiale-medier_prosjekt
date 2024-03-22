function showList(){
    let infoDiv = document.querySelector('.sourceInnhold')
    

    if (infoDiv.style.display === 'none' || infoDiv.style.display === ''){
        infoDiv.style.display = 'flex'
    } else {
        infoDiv.style.display = 'none'
    }
}

function toggleImage() {
    var bilde = document.getElementById('nettvett-img');
    bilde.classList.toggle('visible');
}

function menu() {
    const linker = document.getElementById("linker")
    linker.classList.toggle("show")
}