// Challenge:
// 1. Select h1 and add a click event listener.
// Log the text from the element to the console.

// If you're not sure how to get text, feel free to check out hint.js

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them

const theH1 = document.querySelector("h1");
theH1.addEventListener("mouseover", (event) => {
  console.log(event.target.innerText);
});

const theH2 = document.querySelector("h2");
theH2.addEventListener("mouseover", (event) => {
  console.log(event.target.innerText);
  alert(event.target.innerText);
});

const theH3 = document.querySelector("h3");
theH3.addEventListener("mouseover", (event) => {
  console.log(event.target.innerText);
});
