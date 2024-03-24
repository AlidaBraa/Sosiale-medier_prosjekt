
function showList(){
    let infoDiv = document.querySelector('.sourceInnhold')
    let arrowIcon = document.getElementById('arrowIcon')

    if(infoDiv.style.maxHeight === '0px' || infoDiv.style.maxHeight === ''){
        infoDiv.style.maxHeight = infoDiv.scrollHeight + 100 + 'px'
        arrowIcon.classList.add('rotate180')
    } else {
        infoDiv.style.maxHeight = '0'
        arrowIcon.classList.remove('rotate180')
        arrowIcon.style.transition= '1s ease' 
    }

}

<<<<<<< HEAD
=======
function toggleImage() {
    var bilde = document.getElementById('nettvett-img');
    bilde.classList.toggle('visible');
}

function menu() {
    const linker = document.getElementById("linker")
    linker.classList.toggle("show")
}
>>>>>>> 4e1735dcfc968bdbf48719c09f06e3b4e0606e92
