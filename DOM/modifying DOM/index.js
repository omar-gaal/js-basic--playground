// Challenge:
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

// 1
let theH1 = (document.querySelector("h1").innerHTML = "title of this cast");

// 2
let h2 = document.createElement("h2");
let h2Text = document.createTextNode("I can create HTML elements!");
h2.appendChild(h2Text);

const getBody = document.querySelector("body");
getBody.appendChild(h2);
