// variables & handlers

const buttonAdd = document.getElementById('add').addEventListener('click', add);
const buttonSub = document.getElementById('minus').addEventListener('click', subtract);
const buttonReset = document.getElementById('reset').addEventListener('click', reset);
let counter = document.getElementById('counter');
let count = 0;

// handlers - see above handerls are attached to variables

// function

function add() {
    count ++;
    check();
}

function subtract() {
    count --;
    check();
}

function check() {
    counter.innerHTML = count;
    if (count > 0) {
        counter.style.color = 'green';
    } else if (count < 0) {
        counter.style.color = 'red';
    } if (count === 0) {
        counter.style.color = 'black';
    }
}

// reset button

function reset() {
    count = 0;
    counter.innerHTML = count;
    counter.style.color = 'blue';
    setTimeout(function() {
        counter.style.color = 'black';
    }, 1500);
}