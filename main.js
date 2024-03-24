// function showList() {
//     let infoDiv = document.querySelector('.sourceInnhold')
//     let arrowIcon = document.getElementById('arrowIcon')

//     if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
//         infoDiv.style.display = 'flex'
//         arrowIcon.classList.add('rotate180') // Legg til klassen for å rotere ikonet
//     } else {
//         infoDiv.style.display = 'none'
//         arrowIcon.classList.remove('rotate180') // Fjern klassen for å rotere ikonet
//     }
// }

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

