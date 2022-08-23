var cir = [];
var circleLen = 5;
var resetCircleLen = circleLen;
var randomNumber;
var box = document.querySelector('.box');
disableClickArray = [];
function createCircle() {
    while (cir.length != circleLen) {
        randomNumber = Math.floor(Math.random() * 36 + 1);
        randomNumber = randomNumber + "";
        if (cir.indexOf(randomNumber) < 0) {
            cir.push(randomNumber + "");
            // console.log(randomNumber);
        }
    }
}

function disableClick(x) {
    x.forEach((a) => a.removeAttribute('onclick'));
}

function produceCircle() {
    cir.forEach((a) => {
        box = document.querySelector('.b' + a);
        circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        box.appendChild(circle);
    })
}

function finalWin() {
    win = document.querySelector('.lose');
    // document.querySelector('.box').setAttribute('style', 'display : none');
    document.querySelector('.result').setAttribute('style', 'display : block ; color : green');
    win.setAttribute('style', 'display : none');
    disableClick(document.querySelectorAll('.btn'));
    produceCircle();
}

function finalLose() {
    win = document.querySelector('.win');
    // document.querySelector('.box').setAttribute('style','display : none');
    document.querySelector('.result').setAttribute('style', 'display : block ; color : #bc0000');
    win.setAttribute('style', 'display : none');
    disableClick(document.querySelectorAll('.btn'));
    produceCircle();
}

function win() {
    circleLen++;
    // console.log(circleLen);
    createCircle();
    if (cir.length == 36) {
        finalWin();
    }
}

function run(a) {
    console.log(a.innerText);
    if (cir.indexOf(a.innerText) >= 0) {

        a.setAttribute('style', 'background-color : lightgreen');
        disableClickArray.push(a);
        disableClick(disableClickArray);
        win();
    }
    else {
        a.setAttribute('style', 'background-color : #f95c5c');
        finalLose();
    }
}

// function resetGame() {
//     let allDiv = document.querySelectorAll('.btn');
//     allDiv.forEach((a) => a.setAttribute('onclick', 'run(this)'));
//     createCircle();
//     cir = [];
//     circleLen = resetCircleLen;
//     disableClick = [];
//     document.querySelector('.result').setAttribute('style', 'display : none');
// }

for (let i = 1; i <= 36; i++) {
    let new_div = document.createElement('div')
    new_div.setAttribute('class', "btn b" + i);
    new_div.setAttribute('onclick', 'run(this)');
    new_div.innerHTML = i;
    box.appendChild(new_div);
}
createCircle();



