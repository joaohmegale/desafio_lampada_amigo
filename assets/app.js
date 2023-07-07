let lamp = document.getElementById('lamp');
let contAcesa = 0;
let timer;
let isBroken = false;
let isLighting = false;
let overheat = false;

function turnOn() {
    isLighting = true;
    overheat = true;
    clearTimeout(timer);
    lamp.src = '../img/acesa.jpg';
    timer = setTimeout(() => {
        turnOff();
    }, 5000);
}

function turnOff() {
    isLighting=false;
    clearTimeout(timer);
    lamp.src = '../img/apgada.jpg';
    setTimeout(() => {
        overheat = false;
    }, 5000);
}

function broke() {
    isLighting = false;
    isBroken = true;
    clearTimeout(timer);
    lamp.src = '../img/quebrada.jpg';
}

function turnOnAndBreak() {
    clearTimeout(timer);
    lamp.src = '../img/acesa.jpg';
    timer = setTimeout(() => {
        broke();
    }, 10000);
}

lamp.addEventListener('mouseover', function() {
    if (isLighting || isBroken) {
        return;
    }

    if (overheat) {
        return turnOnAndBreak();
    }

    turnOn();
    contAcesa++;

    if (contAcesa === 5 || isBroken) {
            broke();
    }
});

