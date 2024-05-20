const colorBlocks = document.querySelectorAll('.color');

// Color Code Generation

function generateColor() {
    let colorCode = "";
    for (let i=1; i<=6; i++) colorCode +="123456789ABCDEF"[Math.floor(Math.random()*15)];
    return '#'+colorCode;
}

colorBlocks.forEach(div=>{
    div.innerText=div.style.backgroundColor=generateColor();
});