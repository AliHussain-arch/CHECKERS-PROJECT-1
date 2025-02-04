const body = document.querySelector('body');
const message = document.querySelector('#message');
const blackScore = document.querySelector('#blackScore');
const redScore = document.querySelector('#redScore');
const active = document.querySelectorAll(".active");
const userBoard = document.querySelector("#boardtable");
const resetButton = document.querySelector('#resetButton');
const activeTableCells = document.querySelectorAll('td.active');
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
const allRows = [row0Cells,row1Cells,row2Cells,row3Cells,row4Cells,row5Cells,row6Cells,row7Cells];
const board = [
    ['🔴','🔴','🔴','🔴'],
    ['🔴','🔴','🔴','🔴'],
    ['🔴','🔴','🔴','🔴'],
    ['','','',''],
    ['','','',''],
    ['⚫','⚫','⚫','⚫'],
    ['⚫','⚫','⚫','⚫'],
    ['⚫','⚫','⚫','⚫'],
];

const arrayOfRedPieces = ['🔴','🔴','🔴','🔴'];
const arrayOfBlackPieces = ['⚫','⚫','⚫','⚫'];
let isPieceChoosen = false;
let movementStep1 = false;

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

// legal moves
function legalMoves(event){
    const cell = event.target;
    rowCoordinate = Number(cell.id.slice(1,2))
    cellRowCoordinate = Number(cell.id.slice(2))
    if(!isPieceChoosen){
        if(cell.textContent === '⚫'){
            if (rowCoordinate === 0){
            }
            else if(rowCoordinate%2 ===0){
                    if(cellRowCoordinate === 0){
                        if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent === ''){
                            allRows[rowCoordinate-1][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                        else if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate+1].textContent === '🟥'){
                            if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === ''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        
                    }
                    else if(cellRowCoordinate === 3){
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === ''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        else if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🟥'){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                    }
                    else if(cellRowCoordinate === 1 || cellRowCoordinate === 2){
                        
                            if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-1][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                            else if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate+1].textContent === '🟥'){
                                if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                            if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === ''){
                                allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                            }
                            else if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🟥'){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                } 
                            }
                    }

        }
            else if(rowCoordinate%2 !==0){
                if(cellRowCoordinate === 0 ){
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🟥'){
                            if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                    }
                }
                else if(cellRowCoordinate === 3){
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent === ''){
                        allRows[rowCoordinate-1][cellRowCoordinate-1].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate-1].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🟥' || allRows[rowCoordinate-1][cellRowCoordinate-1].textContent === '🟥'){
                            if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                            else if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === '🔴' || allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === '🟥'){
                                allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                    }
                }
                else if(cellRowCoordinate === 1 || cellRowCoordinate === 2){
                    if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent === ''){
                        if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent === ''){
                            allRows[rowCoordinate-1][cellRowCoordinate-1].style.backgroundColor = 'green';
                        }
                    }
                    else if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate-1].textContent === '🟥'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === ''){   
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === ''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                    }
                    else if(allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent === '🟥'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
            }
        }
        if(cell.textContent === '🔴'){
            if (rowCoordinate === 7){
            }
            else if (rowCoordinate%2 === 0){
                if(cellRowCoordinate === 0 || cellRowCoordinate === 3){
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(cellRowCoordinate === 0){
                        if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent === ''){
                            allRows[rowCoordinate+1][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                        else if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate+1].textContent === '⬛'){
                            if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }
                    if(cellRowCoordinate === 3){
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⬛'){
                            if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
                else if(cellRowCoordinate === 1 || cellRowCoordinate === 2){
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⬛'){
                        if(rowCoordinate !== 6){
                            if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                    }
                    if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate+1].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate+1].textContent === '⬛'){
                        if(rowCoordinate !== 6){
                            if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
            }
            else if(rowCoordinate%2 !== 0){
                if(cellRowCoordinate === 0){
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⬛'){
                        if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                            allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                    }
                }
                else if(cellRowCoordinate === 3){
                    if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate-1].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate-1].textContent === '⬛'){
                        if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                            allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                        }
                    }
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                }
                else if(cellRowCoordinate === 1 || cellRowCoordinate === 2){
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⬛'){
                        if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                            allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                    }
                    if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate-1].style.backgroundColor = 'green';
                    }
                    else if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate-1].textContent === '⬛'){
                        if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                            allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                        }
                    }
                }
            }
        }
        if(cell.textContent === '⬛'){
            if(rowCoordinate !== 0 && rowCoordinate !== 7){
                if(rowCoordinate%2 !== 0){
                    if(cellRowCoordinate !== 0){
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        else if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🟥'){
                            if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate-1].style.backgroundColor = 'green';
                        }
                        else if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='🟥'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        else if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🟥'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate-1].style.backgroundColor = 'green';
                        }
                        else if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='🟥'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                    else{
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🟥'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🟥'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                }
                else if(rowCoordinate%2 === 0){
                    if(cellRowCoordinate !== 3){
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🟥'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='🟥'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🟥'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent==='🔴' || allRows[rowCoordinate-1][cellRowCoordinate+1].textContent==='🟥'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                    else{
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='🟥'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🟥'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                }
            }
            else if(rowCoordinate === 0){
                if(cellRowCoordinate !== 3){
                    if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent===''){
                        allRows[rowCoordinate+1][cellRowCoordinate+1].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='🔴' || allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='🟥'){
                        if(rowCoordinate !== 6){
                            if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }                    
                }
                else{
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === '🔴' || allRows[rowCoordinate+1][cellRowCoordinate].textContent === '🟥'){
                        if(rowCoordinate !== 6){
                            if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
            }
            else if(rowCoordinate === 7){
                if(cellRowCoordinate !== 0){
                    if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent===''){
                        allRows[rowCoordinate-1][cellRowCoordinate-1].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent==='🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🟥'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                        allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🟥'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
                else{
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                        allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🔴' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='🟥'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
            }
        }
        if(cell.textContent === '🟥'){
            if(rowCoordinate !== 0 && rowCoordinate !== 7){
                if(rowCoordinate%2 !== 0){
                    if(cellRowCoordinate !== 0){
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate-1].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='⬛'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate-1].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate-1].textContent==='⬛'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                    else{
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                }
                else if(rowCoordinate%2 === 0){
                    if(cellRowCoordinate !== 3){
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='⬛'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate+1].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate+1].textContent==='⚫' || allRows[rowCoordinate-1][cellRowCoordinate+1].textContent==='⬛'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                    else{
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 6){
                                if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                            allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                        }
                        if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⬛'){
                            if(rowCoordinate !== 1){
                                if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                    allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                                }
                            }
                        }
                    }
                }
            }
            else if(rowCoordinate === 0){
                if(cellRowCoordinate !== 3){
                    if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent===''){
                        allRows[rowCoordinate+1][cellRowCoordinate+1].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='⚫' || allRows[rowCoordinate+1][cellRowCoordinate+1].textContent==='⬛'){
                        if(rowCoordinate !== 6){
                            if(allRows[rowCoordinate+2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }                    
                }
                else{
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === ''){
                        allRows[rowCoordinate+1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⚫' || allRows[rowCoordinate+1][cellRowCoordinate].textContent === '⬛'){
                        if(rowCoordinate !== 6){
                            if(allRows[rowCoordinate+2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate+2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
            }
            else if(rowCoordinate === 7){
                if(cellRowCoordinate !== 0){
                    if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent===''){
                        allRows[rowCoordinate-1][cellRowCoordinate-1].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate-1].textContent==='⚫' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⬛'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate-1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate-1].style.backgroundColor = 'green';
                            }
                        }
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                        allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⬛'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
                else{
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent===''){
                        allRows[rowCoordinate-1][cellRowCoordinate].style.backgroundColor = 'green';
                    }
                    if(allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⚫' || allRows[rowCoordinate-1][cellRowCoordinate].textContent==='⬛'){
                        if(rowCoordinate !== 1){
                            if(allRows[rowCoordinate-2][cellRowCoordinate+1].textContent === ''){
                                allRows[rowCoordinate-2][cellRowCoordinate+1].style.backgroundColor = 'green';
                            }
                        }
                    }
                }
            }
        }
        isPieceChoosen = true;
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

// Movement function

let choosed = '';
let choosedcoordinate = ''
let targetRowCoordinate ;
let cellRowCoordinate ;
function movement(event){
    if(isPieceChoosen){
        const cell = event.target;
        rowCoordinate = Number(cell.id.slice(1,2))
        cellRowCoordinate = Number(cell.id.slice(2))
        if(isPieceChoosen){
            if (cell.textContent === '⚫' || cell.textContent === '🔴' || cell.textContent === '⬛' || cell.textContent === '🟥'){
                oldRowCoordinate = rowCoordinate;
                oldCellRowCoordinate = cellRowCoordinate;
                choosed = cell.textContent;
                choosedcoordinate = document.getElementById(cell.id);
            }
            else if (cell.style.backgroundColor === 'green') {
                cell.textContent = choosed;
                choosedcoordinate.textContent = '';
                activeTableCells.forEach(element => {
                    element.style.backgroundColor = 'grey';
                });
                kingCreator();
                isPieceChoosen = false;
            }
        }
        if(Math.abs(oldRowCoordinate-rowCoordinate)===2){
            if((rowCoordinate-oldRowCoordinate)<0){
                if((cellRowCoordinate - oldCellRowCoordinate) < 0){
                    if(rowCoordinate===0 || rowCoordinate===2 || rowCoordinate===4 || rowCoordinate===6){
                        targetid = `c${rowCoordinate+1}${cellRowCoordinate+1}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                    else if(rowCoordinate===1 || rowCoordinate===3 || rowCoordinate===5 || rowCoordinate===7){
                        targetid = `c${rowCoordinate+1}${cellRowCoordinate}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                }
                else{
                    if(rowCoordinate===0 || rowCoordinate===2 || rowCoordinate===4 || rowCoordinate===6){
                        targetid = `c${rowCoordinate+1}${cellRowCoordinate}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                    else if(rowCoordinate===1 || rowCoordinate===3 || rowCoordinate===5 || rowCoordinate===7){
                        targetid = `c${rowCoordinate+1}${cellRowCoordinate-1}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                }
            }
            else{
                if((cellRowCoordinate - oldCellRowCoordinate) < 0){
                    if(rowCoordinate===0 || rowCoordinate===2 || rowCoordinate===4 || rowCoordinate===6){
                        targetid = `c${rowCoordinate-1}${cellRowCoordinate+1}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                    else if(rowCoordinate===1 || rowCoordinate===3 || rowCoordinate===5 || rowCoordinate===7){
                        targetid = `c${rowCoordinate-1}${cellRowCoordinate}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                }
                else{
                    if(rowCoordinate===0 || rowCoordinate===2 || rowCoordinate===4 || rowCoordinate===6){
                        targetid = `c${rowCoordinate-1}${cellRowCoordinate}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                    else if(rowCoordinate===1 || rowCoordinate===3 || rowCoordinate===5 || rowCoordinate===7){
                        targetid = `c${rowCoordinate-1}${cellRowCoordinate-1}`;
                        targetRowCoordinate = Number(targetid.slice(1,2));
                        cellRowCoordinate = Number(targetid.slice(2));
                        allRows[targetRowCoordinate][cellRowCoordinate].textContent = '';
                    }
                    
                }
            }
        }
        }
    targetRowCoordinate = null;
    cellRowCoordinate = null;
    
}

// King Pieces creator
function kingCreator(){
    row0Cells.forEach(element => {
        if(element.textContent ===  '⚫'){
            element.textContent = '⬛';
        }
    });
    row7Cells.forEach(element => {
        if(element.textContent ===  '🔴'){
            element.textContent = '🟥';
        }
    });
}

// Winner finder
function winnerFinder(){

    let winnerObject = {
        blackPiecesCount : 0,
        redPiecesCount : 0,
    };
    activeTableCells.forEach(element => {
        if(element.textContent === "⚫" || element.textContent === "⬛"){
            winnerObject.blackPiecesCount ++;
        }
        else if(element.textContent === "🔴" || element.textContent === "🟥"){
            winnerObject.redPiecesCount ++;
        }
    });
    blackScore.textContent = 12 - winnerObject.redPiecesCount;
    redScore.textContent = 12 - winnerObject.blackPiecesCount;
    if(winnerObject.blackPiecesCount === 0){
        message.textContent = 'RED WON !';
        message.style.backgroundColor = 'white';
        message.style.color = 'red';
        message.style.border = 'solid black';
    }
    else if(winnerObject.redPiecesCount === 0){
        message.textContent = 'BLACK WON !';
        message.style.backgroundColor = 'white';
        message.style.color = 'black';
        message.style.border = 'solid black';
    }
}

//Reset button
function resetGame(){
    const defaultboard = [
        ['🔴','🔴','🔴','🔴'],
        ['🔴','🔴','🔴','🔴'],
        ['🔴','🔴','🔴','🔴'],
        ['','','',''],
        ['','','',''],
        ['⚫','⚫','⚫','⚫'],
        ['⚫','⚫','⚫','⚫'],
        ['⚫','⚫','⚫','⚫'],
    ];
    for(let i = 0;i<4;i++){
        board[0][i]=defaultboard[0][i];
        board[1][i]=defaultboard[1][i];
        board[2][i]=defaultboard[2][i];
        board[3][i]=defaultboard[3][i];
        board[4][i]=defaultboard[4][i];
        board[5][i]=defaultboard[5][i];
        board[6][i]=defaultboard[6][i];
        board[7][i]=defaultboard[7][i];
    }
    activeTableCells.forEach(element => {
        element.style.backgroundColor = 'grey';
    });
    rendering();
    blackScore.textContent = 0;
    redScore.textContent = 0;
    isPieceChoosen = false;
    targetRowCoordinate = null;
    cellRowCoordinate = null;
}


// Event listners collections
active.forEach(element => {
    element.addEventListener('click', legalMoves);
    element.addEventListener('click',movement);
    element.addEventListener('mouseenter', piecesHover);
    element.addEventListener('mouseleave', piecesHover);
});
resetButton.addEventListener('click',resetGame);
body.addEventListener('mousemove',winnerFinder);
