function startProgram(){
	x = Math.floor((Math.random() * 100) + 1);
	y = Math.floor((Math.random() * 100) + 1);
	document.getElementById("par1").innerHTML = x;
	document.getElementById("par2").innerHTML = y;
}

function check(){
	par3 = parseInt(document.getElementById("par3").value);
	par1 = parseInt(document.getElementById("par1").innerHTML);
	par2 = parseInt(document.getElementById("par2").innerHTML);
	if (par1+par2==par3)
		alert("Sachtein");
	else
		alert("Not Sachtein");
}
