x=0;
y=0;
drawcircle="";
drawrect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("status").innerHTML="O sistema está ouvindo,pode falar!";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    var contact=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="A fala foi reconhecida como: "+contact;
if(contact=="círculo"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Desenhando um circulo...";
    drawcircle="set";

}
if(contact=="retângulo"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Desenhando um retangulo...";
    drawrect="set";
}
}
function setup() {
    canvas=createCanvas(900,600);
}
function draw() {
if (drawcircle=="set") {
    radios=Math.floor(Math.random()*100);
    circle(x,y,radios);
    document.getElementById("status").innerHTML="circulo desenhado...";
drawcircle=""
}
if (drawrect=="set") {
    rect(x,y,70,50);
    document.getElementById("status").innerHTML="retangulo desenhado...";
drawrect=""
}  
}