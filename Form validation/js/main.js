'use strict';
//*****check required fields*****

//create global variable to submit
let formOK;

//select all elements
const inputs = document.querySelectorAll('input');

const checkAttribute = (elements, attr, func) => {
    elements.forEach((el) => {
        if (el.hasAttribute(attr)) {
            func(el);
        }
    });
};

const checkEmpty = (element) => {
    if(element.value === '') {
        formOK ++;
        element.setAttribute('style', 'border: solid red 2px');
    }
    else {
        formOK--;
        element.removeAttribute('style');
    }
}

const checkPattern = (element) => {
    const pattern = new RegExp(element.getAttribute('pattern'), 'i');
    const value = element.value;
    if (!pattern.test(value)) {
        element.setAttribute('style', 'border: solid yellow 2px');
    } else {
        element.removeAttribute('style');
    }
};
const form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    formOK = 0;
    checkAttribute(inputs, 'required', checkEmpty);
    checkAttribute(inputs, 'pattern', checkPattern);
    console.log(formOK);
    if(formOK === -8){
        form.submit();
    }
});