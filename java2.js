function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var randtop = randomIntFromInterval(1, 1500);
var randleft = randomIntFromInterval(1, 1500);

function yaai(){
    var randtop = randomIntFromInterval(1, 1500);
    var randleft = randomIntFromInterval(1, 1500);
    
    var features = `width=300,height=220,top=${randtop},left=${randleft}`;
    
    window.open('page3.html', 'tooslow' + new Date().getTime(), features);
} 
    
const myAudio = new Audio('tooslowaudio.mp3');
myAudio.loop = true;
myAudio.play();

