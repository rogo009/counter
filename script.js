// variables

const buttonAdd = document.getElementById('add');
const buttonSub = document.getElementById('minus');
const buttonReset = document.getElementById('reset');
let counter = document.getElementById('counter');
// let array = []; 
let count = 0;

// handlers

buttonAdd.addEventListener('click', add);
buttonSub.addEventListener('click', subtract);
buttonReset.addEventListener('click', reset);

// function

function add() {
    count +=1;
    counter.innerHTML = count;
    check();
}

function subtract() {
    count -=1;
    counter.innerHTML = count;
    check();
}

function check() {
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

// additional function add for reset button
function reset() {
    count = 0;
    counter.innerHTML = count;
    counter.style.color = 'blue';
    setTimeout(function() {
        counter.style.color = 'black';
    }, 1500);
}

// var button = document.getElementById("clickme"),
//   count = 0;

// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };

