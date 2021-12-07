var x=280, y=20, r=40, ysamm=1;
var x1 = x - 20;
var x2 = x + 20;
var r1 = r - 32;
var y1= y - 5;
var ykiirendus=0.4;
var speed = 400;
var t, g; // tahvel, graafiline kontekst

// liigutab palli liigu() funktsiooniga
// 100 - tähendab 10 korda sekundis
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 400);
}
// joonista palli
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.fillStyle="red";
    g.beginPath();
    g.arc(x, y, r, 0, 4*Math.PI, true);
    g.rect(0, 300, t.width, 200)
    g.fillStyle="blue";
    g.opacity = 0.5;
    g.stroke(); // joon
    g.fill(); // taust

    if(y > t.height) {
        y = 0;
        y1 = y - 5;
        speed = 400;
        x = randNum(0, t.width);
        x1 = x - 20;
        x2 = x + 20;
    }

    g.fillStyle="black";
    g.beginPath();
    g.arc(x1, y1, r1, 0, 4*Math.PI, true);
    g.stroke();
    g.fill();

    g.fillStyle="black";
    g.beginPath();
    g.arc(x2 , y1, r1, 0, 4*Math.PI, true);
    g.stroke();
    g.fill();
}
// kuukumine alla
function liigu() {
    y = y + ysamm;
    y1 += ysamm;
    ysamm += ykiirendus;
    joonista();

    ysamm = ysamm + ykiirendus;

    if(y > t.height/1.5){
        y += ysamm*0.4;
        y1 += ysamm*0.4;
        ysamm = 1;
        joonista();
        return
    }

    joonista();
}

function inputSpeed(event){
    var speed = document.getElementById('kogus2').value;

    setInterval('liigu()', speed);
}

function inputSize(event){
    var size = document.getElementById('kogus3').value;

    r = size;
    r1 = (size * 1.3) - size;
}
// Kukkumiskoha määramine hiirega – определение места начала падения мышкой
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    x1 = hx - 20;
    x2 = hx + 20;
    y=hy;
    y1 = hy - 5;

    r -= 0.5; r1 -= 0.2;
    ysamm=0;
}

function randNum(min, max) {
    return Math.random() * (max - min) + min;
}
