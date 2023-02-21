let firstCard = 6
let secondCard = 9
let summa = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let ilmoitus = ""

let ilmoitusEl = document.getElementById("ilmoitus-el")

let summaEl = document.getElementById("summa-el")


function aloitaPeli() {
    summaEl.textContent = "Summa: " + summa
    if (summa <= 20){
        ilmoitus = "halluukko uue kortin"
    } else if (summa === 21) {
        ilmoitus = "voitit pelin"
        hasBlackJack = true
    } else {
        ilmoitus = "hävisit pelin, yritä uudestaan"
        isAlive = false
    }

    ilmoitusEl.textContent = ilmoitus
}