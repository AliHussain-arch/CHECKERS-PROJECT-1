const active = document.querySelectorAll(".active");
const userBoard = document.querySelector("#boardtable");
const row0 = document.querySelector('#row0'),
      row0Cells = row0.querySelectorAll('td.active'),
      row1 = document.querySelector('#row1'),
      row1Cells = row1.querySelectorAll('td.active'),
      row2 = document.querySelector('#row2'),
      row2Cells = row2.querySelectorAll('td.active'),
      row3 = document.querySelector('#row3'),
      row3Cells = row3.querySelectorAll('td.active'),
      row4 = document.querySelector('#row4'),
      row4Cells = row4.querySelectorAll('td.active'),
      row5 = document.querySelector('#row5'),
      row5Cells = row5.querySelectorAll('td.active'),
      row6 = document.querySelector('#row6'),
      row6Cells = row6.querySelectorAll('td.active'),
      row7 = document.querySelector('#row7'),
      row7Cells = row7.querySelectorAll('td.active');
const board = [
    ['⚫','⚫','⚫','⚫'],
    ['⚫','⚫','⚫','⚫'],
    ['⚫','⚫','⚫','⚫'],
    [0,0,0,0],
    [0,0,0,0],
    ['🔴','🔴','🔴','🔴'],
    ['🔴','🔴','🔴','🔴'],
    ['🔴','🔴','🔴','🔴'],
];





// rendering function
function rendering(){
    for(let i = 0;i<4;i++){
        row0Cells[i].textContent=board[0][i];
        row1Cells[i].textContent=board[1][i];
        row2Cells[i].textContent=board[2][i];
        row3Cells[i].textContent=board[3][i];
        row4Cells[i].textContent=board[4][i];
        row5Cells[i].textContent=board[5][i];
        row6Cells[i].textContent=board[6][i];
        row7Cells[i].textContent=board[7][i];
    }
}
rendering();

// Pieces clicked mechanism

let clicked = false;

function click(event) {
    const element = event.target;
    if ((element.textContent === "🔴" || element.textContent === "⚫") && clicked !== true) {
        element.classList.add("clicked");
        clicked = true;
    }
    else if(element.textContent === "🔴" || element.textContent === "⚫") {
        element.classList.remove("clicked");
        clicked = false;
    }
}

// Highlighting on hover mechanism

let hover = false;

function piecesHover(event) {
    const element = event.target;
    if ((element.textContent === "🔴" || element.textContent === "⚫") && hover === false) {
        element.classList.add("hoverOn");
        hover = true;
    }
    else if (element.textContent === "🔴" || element.textContent === "⚫") {
        element.classList.remove("hoverOn");
        hover = false;
    }
}

// Movement mechanism black pieces




// Event listners collections

active.forEach(element => {
    element.addEventListener('click', click);
    element.addEventListener('mouseover', piecesHover);
    element.addEventListener('mouseout', piecesHover);
});




