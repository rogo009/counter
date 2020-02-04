// variables

const buttonAdd = document.getElementById('add');
const buttonSub = document.getElementById('minus');
let counter = document.getElementById('counter');
let array;

// handlers

buttonAdd.addEventListener('click', add);
buttonSub.addEventListener('click', subtract);

// function

function add() {
    counter.style.color = 'red';
}

function subtract() {

}