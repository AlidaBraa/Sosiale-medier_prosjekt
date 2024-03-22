// Array med begrep og definisjon par
const terms = [
    { term: 'GDPR', definition: 'EU-lov som beskytter personlig data og sikrer personvern.' },
    { term: 'Universell utforming', definition: 'Design som gjør produkter og tjenester tilgjengelige for alle, uavhengig av evner eller forskjeller.' },
    { term: 'Sosiale medier', definition: 'Nettplattformer for å dele innhold og kommunisere, som Facebook og Twitter.' },
    { term: 'Ekkokammer', definition: 'Situasjon der en person kun eksponeres for informasjon som bekrefter deres egne synspunkter.' },
    { term: 'Kildekritikk', definition: 'Evnen til å vurdere påliteligheten av informasjonen.' },
    { term: 'Algoritme', definition: 'Instruksjoner brukt av dataprogrammer for å utføre spesifikke oppgaver, som å filtrere innhold på sosiale medier.' }
]

// Funksjon for å blande arrayen med begrep og definisjoner
terms.sort(() => Math.random() - 0.5)

const memoryBoard = document.getElementById('memoryBoard')
let activeCard = null
let firstCard = null
let activeTerm = null
let matchedPairs = 0

// Funksjon for å opprette et kort
function createCard(content, pair) {
    const card = document.createElement('div')
    card.classList.add('memory-card')
    card.dataset.pair = pair
    card.textContent = content
    // Tilfeldig rekkefølge for kortene
    card.style.order = Math.floor(Math.random() * terms.length)
    // Legger til hendelseslytter for å snu kortet
    card.addEventListener('click', () => flipCard(card, pair))
    return card
}

// Funksjon for å sjekke om kortene matcher
function flipCard(card, matchTerm) {
    // Sjekker om kortet allerede er snudd eller matchet
    if (!card.classList.contains('matched') && !card.classList.contains('active') && activeCard !== card) {
        card.classList.add('active')

        if (!activeCard) {
            // Lagrer det første kortet som er snudd
            activeCard = card
            firstCard = card
            activeTerm = matchTerm
        } else {
            // Hvis det andre kortet matches med det første
            if (matchTerm === activeTerm) {
                // Markerer kortene som matchet
                card.classList.add('matched')
                activeCard.classList.add('matched')
                matchedPairs += 1
                // For å få en annen farge på de ulike parene:
                card.classList.add('matched-' + matchedPairs)
                activeCard.classList.add('matched-' + matchedPairs)


                // Hvis alle par er matchet, viser en melding
                if (matchedPairs === terms.length) {
                    setTimeout(() => {
                        alert('Gratulerer, du har matchet alle begrepene!')
                    }, 500)
                    applauseSound.play(); // Spiller av lyd (applaus)
                }
            } else {
                // Hvis kortene ikke matcher, snur dem tilbake etter en liten forsinkelse
                setTimeout(() => {
                    card.classList.remove('active')
                    firstCard.classList.remove('active')
                }, 1000)
            }
            activeCard = null
            activeTerm = null
        }
    }
}

// Genererer kortene for begreper og definisjoner
terms.forEach((term, index) => {
    const termCard = createCard(term.term, index)
    const definitionCard = createCard(term.definition, index)
    memoryBoard.appendChild(termCard)
    memoryBoard.appendChild(definitionCard)
})

