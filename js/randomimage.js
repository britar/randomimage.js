const myButton = document.querySelector('button');
const image = document.querySelector('.img');
const images = ["äike.webp","kilpk.jpeg","liivar.jpeg","torm.jpeg"];

myButton.addEventListener('click', changeImage)

function changeImage() {
    console.log(image);

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    img.src = "images/liivar.jpeg" images[randomIndex];
}


