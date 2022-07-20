const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/doge.jfif') {
      myImage.setAttribute('src','images/cheems.jfif');
    } else {
      myImage.setAttribute('src','images/doge.jfif');
    }
}