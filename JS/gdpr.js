function showInfo() {
    let infoDiv = document.querySelector('.info-cookies');

    // Sjekk om max-height allerede er satt til '0px' eller ikke
    if (infoDiv.style.maxHeight === '0px' || infoDiv.style.maxHeight === '') {
        infoDiv.style.maxHeight = infoDiv.scrollHeight + 100 + 'px' // Legg til en ekstra høyde for padding
        infoDiv.style.padding = '10px' // Legg til padding når elementet er åpent
    } else {
        infoDiv.style.maxHeight = '0' // Skjuler div ved å sette max-height til null
        infoDiv.style.padding = '0' // Fjern padding når elementet er lukket
    }
}
