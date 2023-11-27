const offertaGiorno = document.getElementById('offerta-giorno')
const bottoneOffertaGiorno = document.getElementById('bottone-offerta-giorno')
const bottoneCards = document.getElementsByClassName('rimuovi-cards')
let cards = document.querySelectorAll('.card')
console.log(cards);

window.addEventListener('resize', function() {
    if (window.innerWidth <= 767) {
        offertaGiorno.classList.add('d-sm-none')
        bottoneOffertaGiorno.classList.add('d-sm-none')
    }
})

let voli = document.getElementsByClassName('volo')
console.log("Sono presenti ben " + voli.length + " voli.");

const rimuoviCards = function() {
    for(let i = 0; i < cards.length; i++) {
        cards[i].remove()
    }
}

bottoneCards[0].addEventListener('click', rimuoviCards)