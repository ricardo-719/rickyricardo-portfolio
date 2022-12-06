const music = document.getElementById('toggleMusic')
let toggleOnOff = 1;

const buttonTag = [
    '<span style="font-size:15px;">🔇</span> on / OFF',
    '<span style="font-size:15px;">🔊</span> ON  /    off'
];
let piece = new Audio('./sounds/T-Allegro.mp3')
//Function for toggling music ON/OFF
function playMusic(){
    if(toggleOnOff >= buttonTag.length) {
        toggleOnOff = 0;
        music.innerHTML = buttonTag[toggleOnOff];
        piece.pause();
        toggleOnOff++;
    } else {
        music.innerHTML = buttonTag[toggleOnOff];
        piece.play();
        toggleOnOff++;
    }
}