var ctx;
var x = 75;
var y = 75;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;

rightDown = false;
leftDown = false;




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

//set rightDown or leftDown if the right or left keys are down
function onKeyDown(evt) {
  if (evt.keyCode == 39) rightDown = true;
  else if (evt.keyCode == 37) leftDown = true;
}

//and unset them when the right or left key is released
function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}

function onMouseMove(evt) {
  if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
    paddlex = evt.pageX - canvasMinX;
  }
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
$(document).mousemove(onMouseMove);

function draw(){
	  clear();
	  circle(x,y,10);
	  if (rightDown) paddlex += 5;
	  else if (leftDown) paddlex -= 5;
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

function init_mouse() {
  canvasMinX = $("#canvas").offset().left;
  canvasMaxX = canvasMinX + WIDTH;
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