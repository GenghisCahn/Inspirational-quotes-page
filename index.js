import {quotes} from '/data.js'
const backgroundEl = document.getElementById('background')



function renderQuote(){
    
    let quoteHtml = ""
    let quote = quotes[Math.floor(Math.random()*quotes.length)]
    
    quoteHtml += `
    
    <div class="container">
        <h1>${quote.quote}.</h1>
        <h2>- ${quote.author}</h2>
    </div>`
    
    document.getElementById('quote').innerHTML = quoteHtml
    
}

renderQuote()




function randomBackground() {
    
    let randomNumber = Math.floor(Math.random() * quotes.length)
    
    
    backgroundEl.style.backgroundImage = 'url('+ quotes[randomNumber].image +')'
    
    
}

randomBackground()