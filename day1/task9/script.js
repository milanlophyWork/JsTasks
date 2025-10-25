const quotes = [
    'Speed is not everything, accuracy matters.',
    'Practice makes a person perfect.',
    'Typing games help improve focus and reflexes.',
    'Racing against time improves your skills.'
]

const quoteEl = document.getElementById('quote')
const inputEl = document.getElementById('input')
inputEl.style.padding = '5px'
inputEl.style.width = '30%'
const resultEl = document.getElementById('result')

let currentQuote = ''
let startTime

function newQuote(){
    currentQuote = quotes[Math.floor(Math.random()*quotes.length)] // selects a random quote from quotes array
    quoteEl.textContent = currentQuote
    inputEl.value = ''
    inputEl.disabled = false
    inputEl.focus() // focuses the cursor inside the input box
    resultEl.textContent = ''
    startTime = new Date().getTime()

}
inputEl.addEventListener('input', ()=>{
    if(inputEl.value === currentQuote){
        let endTime = new Date().getTime()
        let totalTime = ((endTime - startTime)/1000).toFixed(2)
        resultEl.textContent = `Wohoo 🎉! You finished in ${totalTime} seconds`
        inputEl.disabled = true
        // newQuote()
        setTimeout(newQuote, 1500) // wait 1.5s and start by a new round with new random quote 
    }
})

newQuote() // Start with a random quote