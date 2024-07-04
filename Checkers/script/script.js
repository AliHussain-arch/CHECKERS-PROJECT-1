const active = document.querySelectorAll(".active");

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




