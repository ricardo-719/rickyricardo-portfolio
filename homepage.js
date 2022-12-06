//Variables declaration
const img = document.getElementById('mainImg');
const text = document.getElementById('mainDes');
let currentImgIdx = 1;
const images = [
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic1.jpg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic2.jpeg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic3.jpg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic4.jpg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic5.jpg"
];
const descriptions = [
    "Welcome to my homepage! Here you will learn more about myself and my CS50 journey. I will share my background, hobbies and even some of my projects completed during the course of this CS50 experience. Enjoy! [1/5]",
    "I have a degree in Mechanical Engineering. After four years of work experience I decided to move to Thailand to learn more about Buddhism and to experience a different culture. [2/5]",
    "I am originally from the Dominican Republic, a place I love and visit often. My wife is Thai, she is a Social Studies teacher, and as you can see, that's my dad! The greatest guy I know. [3/5]",
    "I consider myself to be a Buddhist. I enjoy reading about it and practicing sitting and walking meditation. Every once in a while my wife and I support our local monastery with supplies! [4/5]",
    "I'm also a teacher with six years of experience. Recently, I moved from teaching full-time to doing it part-time; now I have more time to continue to develop my programming skills! [5/5]"
];
//Function for changing the images
function changeImage(){
    if(currentImgIdx >= images.length) {
        currentImgIdx = 0;
    }
    img.src = images[currentImgIdx];
    text.innerHTML = descriptions[currentImgIdx];
    currentImgIdx++;
}