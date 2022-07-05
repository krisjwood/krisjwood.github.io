let bitcoinJSON = null;

function copy() {
    navigator.clipboard.writeText("wget krisjwood.github.io/kris_wood_cv.pdf");
    document.getElementById("wget-snippet").innerHTML = 'Copied to clipboard!'
}

function setBackgroundColor() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        section.style.backgroundColor = "#" + randomColor;
    });
}

function love() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function() { 
        snackbar.className = snackbar.className.replace("show", ""); 
    }, 2000);
}

async function getBitcoinPrice() {
    fetch("https://rest.coinapi.io/v1/exchangerate/GBP/BTC", {
        method: "GET",
        headers: {
            "X-CoinAPI-Key": "31CDDF2F-330D-4697-A350-779B920463D0"
        }
    })
    .then(response => response.json())
    .then(json => {
        bitcoinJSON = json
    })
    .catch(err => console.error(err))
}

function openBitcoinModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalFX").innerHTML = `£120k = &#x20BF;${(bitcoinJSON.rate * 120000).toFixed(2)}` ;
    document.getElementById("modalFXtime").innerHTML = `${Date(bitcoinJSON.time)}` ;
    
}

function closeBitcoinModal() {
    document.getElementById("myModal").style.display = "none";
}