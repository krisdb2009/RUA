var canvas = null;
var ctx = null;
onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    
    requestAnimationFrame(drawLoop);
    
    onresize();
    
};

onresize = function() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
};

var x = 0;
var y = 0;
var speed = 0.5;


var img = new Image();
img.src = 'sprites/209.png';

var posx = 1000;
var posy = 100;
var before = 0;

function drawLoop() {
    
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPerformance();
    

    posx = posx - (performance.now() - before) / 2;
    if(posx < (img.width * -1)) {
        posx = canvas.width;
        posy = randBetween(100, canvas.height - (img.height / 2));
    }
    
    ctx.drawImage(img, posx, posy);
    before = performance.now();







    
    requestAnimationFrame(drawLoop);
}

var perf_before = 0;
var perf_fps = 0;
var perf_count = 0;
function drawPerformance() {
    if((perf_count++ % 30) == 0) {
        perf_fps = Math.round(1000 / (performance.now() - perf_before));
    }
    perf_before = performance.now();
    ctx.fillStyle = 'black';
    ctx.fillRect(canvas.width - 210, 0, 210, 40);
    ctx.fillStyle = 'white';
    ctx.font = '12px Lucida Console';
    ctx.fillText('ba dev (RUA) | ' + perf_fps + ' FPS', canvas.width - 200, 12);
    ctx.fillText('ver: 0.0.0.0', canvas.width - 200, 24);
    ctx.fillText('mem: ' + (performance.memory.usedJSHeapSize / 1024 / 1024).toPrecision(3) + ' mb', canvas.width - 200, 36);
}

function randBetween(x, y) {
    return Math.floor(Math.random() * y) + x;  
}