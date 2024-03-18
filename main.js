function showList(){
    let infoDiv = document.querySelector('.sourceInnhold')
    

    if (infoDiv.style.display === 'none' || infoDiv.style.display === ''){
        infoDiv.style.display = 'flex'
    } else {
        infoDiv.style.display = 'none'
    }
}