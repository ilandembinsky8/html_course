var ctx;
var x = 75;
var y = 75;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;

function rect(x,y,w,h) {
	  ctx.beginPath();
	  ctx.rect(x,y,w,h);
	  ctx.closePath();
	  ctx.fill();
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function circle(x,y,radius){
	  ctx.beginPath();
	  ctx.arc(x, y, radius, 0, Math.PI*2, true); 
	  ctx.closePath();
	  ctx.fill();
}

function draw(){
	  clear();
	  circle(x,y,10);
	  rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
	  
	  if (x + dx > WIDTH || x + dx < 0)
		dx = -dx;
	  if (y + dy < 0)
		dy = -dy;
	  else if (y + dy > HEIGHT) 
		if (x > paddlex && x < paddlex + paddlew)
		  dy = -dy;
		else{
		  dy=0;
		  dx=0;
		}
 
	  
	  x += dx;
	  y += dy;
}

function init_paddle() {
  paddlex = WIDTH / 2;
  paddleh = 10;
  paddlew = 75;
}
	
function init(){
	//get a r eference to the canvas
	var c = document.getElementById("canvas");
	ctx = c.getContext("2d");
	WIDTH = $("#canvas").width();
	HEIGHT = $("#canvas").height();
	setInterval(draw, 10);
}