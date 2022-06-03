const myButton = document.querySelector('button');
const mybox = document.querySelector('.box');
const colors = ["pink", "yellow", "blue", "green"];

myButton.addEventListener('click', changeColor);

function changeColor() {
    console.log(mybox);

    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    mybox.style.backgroundColor = colors[randomIndex];
}