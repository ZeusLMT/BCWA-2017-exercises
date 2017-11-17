"use strict"
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const loadJSON = (query, url) => {
    const element = document.querySelector(query);
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            json.forEach((image) => {
                const h3 = document.createElement('h3');
                const figCaption = document.createElement('figcaption');
                const img = document.createElement('img');
                const a = document.createElement('a');
                const figure = document.createElement('figure');
                const li = document.createElement('li');

                // add text content
                const text = document.createTextNode(image.mediaTitle);
                h3.appendChild(text);

                // add attributes
                img.setAttribute('src', 'img/thumbs/' + image.mediaThumb);
                a.setAttribute('href', 'img/original/' + image.mediaUrl);

                // nest elements
                figCaption.appendChild(h3);
                a.appendChild(img);
                figure.appendChild(a);
                figure.appendChild(figCaption);
                li.appendChild(figure);

                // insert new elements to page
                element.appendChild(li);
            })

        })
};

loadJSON('ul', 'images.json');