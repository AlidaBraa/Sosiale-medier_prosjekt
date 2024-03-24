//flip the coin JS kode
const card = document.querySelector(".card_inner")
const cardFront = document.querySelector(".card-front")
const cardBack = document.querySelector(".card-back")

card.addEventListener("click", function () {
    card.classList.toggle("flipped");  //for flip transition
    //fjerner hover effekt når den flipper (det ser bedre ut sånn)
    cardBack.classList.remove("card-hover-back")
    cardFront.classList.remove("card-hover-front")
});

//legger til hover effekt slik at man skjønner at den flipper
card.addEventListener("mouseover", function(){
    if(card.classList.contains("flipped")){
        cardBack.classList.add("card-hover-back")
    }else{
        cardFront.classList.add("card-hover-front")
    }
})
card.addEventListener("mouseout", function(){
    if(card.classList.contains("flipped")){
        cardBack.classList.remove("card-hover-back")
        cardBack.style.transition= '0.5s ease' 
    }else{
        cardFront.classList.remove("card-hover-front")
        cardFront.style.transition= '0.5s ease' 
    }
})
