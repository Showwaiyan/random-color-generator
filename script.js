const colorBlocks = document.querySelectorAll('.color');
const refreshBtn = document.querySelector('.refresh-btn');

// Color Code Generation

function generateColor() {
    let colorCode = "";
    for (let i=1; i<=6; i++) colorCode +="123456789ABCDEF"[Math.floor(Math.random()*15)];
    return '#'+colorCode;
}

// Div color added
function divColorAdded() {
    colorBlocks.forEach(div=>{
        div.innerText=div.style.backgroundColor=generateColor();
    });
}

divColorAdded(); // Immediate call for color generation

// Color refresh function
refreshBtn.addEventListener('click',divColorAdded);

// Copy Color function
colorBlocks.forEach(div=>{
    div.addEventListener('click',e=>{
        navigator.clipboard.writeText(div.innerText);
        alert(`Hex Code ${div.innerText} is copied!!`);
    })
});