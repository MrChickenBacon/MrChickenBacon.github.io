// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&


var bird;
var pipes = [];
var img;
var img1;
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var Interval;
console.log (appendTens, appendSeconds);
start();

function setup() {
    createCanvas(500, 708);
    bird = new Bird();
    pipes.push(new Pipe());
    img = loadImage("https://i.imgur.com/TdmoduC.png");
    img1 = loadImage("https://i.imgur.com/svCXUSW.png");
}

function draw() {
    image(img1);

    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
            play1();
            add();
            stop();
        }


        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }


    }

    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

}

function add() {
    var start = document.getElementById('gamestop');
    var info = document.getElementById('info');
    info.innerHTML = 'Game Over ';
    info.style.color = 'red';
    info.style.textShadow = '0 0 6px #000000, 0 0 1px #000000';
    info.style.fontSize = '500%';
    info.style.position = 'absolute';
    document.getElementById('gamestop').style.display = 'initial';
    slutt();
}

function slutt() {
    stop();
    noLoop();
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        play();
        //console.log("SPACE");
    }
}

//LYD

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
}

//Tidtaker



function start() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function stop() {
    clearInterval(Interval);
}

function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;

    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

}
