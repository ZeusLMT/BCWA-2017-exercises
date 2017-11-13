"use strict"
// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
const loadHTML = (query, url) => {
    const element = document.querySelector(query);
    fetch('images.html')
        .then( (response) => {
            return response.text();
        })
        .then((text) => {
            element.innerHTML = text;
        });
    };

loadHTML('ul', 'images.html');