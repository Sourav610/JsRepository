# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-fkhx3g?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

## Project 1

```javascript
console.log("hello")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```