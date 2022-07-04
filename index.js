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