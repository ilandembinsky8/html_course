var score=0;
var attempts=0;
function startProgram(){
	
	x = Math.floor((Math.random() * 100) + 1);
	y = Math.floor((Math.random() * 100) + 1);
	document.getElementById("par1").innerHTML = x;
	document.getElementById("par2").innerHTML = y;
	
}

function check(){
	attempts++;
	par3 = parseInt(document.getElementById("par3").value);
	par1 = parseInt(document.getElementById("par1").innerHTML);
	par2 = parseInt(document.getElementById("par2").innerHTML);
	if (par1+par2==par3){
		alert("Sachtein");
		score+=20;
		document.getElementById("score").innerHTML = score;
	}

	else
		alert("Not Sachtein");
	if (attempts==5){
		alert(score);
		score=0;
		document.getElementById("score").innerHTML = score;
	}
	startProgram();
}