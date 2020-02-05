// variables

const buttonAdd = document.getElementById('add');
const buttonSub = document.getElementById('minus');
const buttonReset = document.getElementById('reset').addEventListener('click', reset);
let counter = document.getElementById('counter');
let count = 0;

// handlers

buttonAdd.addEventListener('click', add);
buttonSub.addEventListener('click', subtract);

// function

function add() {
    count +=1;
    check();
}

function subtract() {
    count -=1;
    check();
}

function check() {
    counter.innerHTML = count;
    if (count > 0) {
        counter.style.color = 'green';
    } 
    if (count < 0) {
        counter.style.color = 'red';
    }
    if (count === 0) {
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