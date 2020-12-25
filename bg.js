const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(number){

}

function genRandom(){
    number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();