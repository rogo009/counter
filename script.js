// variables

const buttonAdd = document.getElementById('add');
const buttonSub = document.getElementById('minus');
let counter = document.getElementById('counter');
let array = [];
let count = 0;

// handlers

buttonAdd.addEventListener('click', add);
buttonSub.addEventListener('click', subtract);

// function

function add() {
    count +=1;
    counter.innerHTML = count;
}

function subtract() {
    count -=1;
    counter.innerHTML = count;
}

// var button = document.getElementById("clickme"),
//   count = 0;

// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };

