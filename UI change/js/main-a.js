"use strict";

//get all the buttons
const addButton = document.querySelector('#add');
const changeButton = document.querySelector('#change');
const toggleButton = document.querySelector('#toggle');


//get all the <p>
const firstP = document.querySelector('p');
const secondP = document.querySelector('p:nth-child(2)');
const thirdP = document.querySelector('p:nth-child(3)');

//Add event listeners

addButton.addEventListener('click', (evt) => {
    firstP.classList.add('red');
});

changeButton.addEventListener('click', (evt) => {
   if(secondP.classList.contains('blue')) {
       secondP.classList.replace('blue', 'red');
   }
   else secondP.classList.replace('red', 'blue');
});

toggleButton.addEventListener('click', (evt) => {
    thirdP.classList.toggle('green');
});