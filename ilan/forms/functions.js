function startProgram(){
	for (i=1;i<=5;i++){
		x = Math.floor((Math.random() * 100) + 1);
		y = Math.floor((Math.random() * 100) + 1);
		document.getElementById("par"+i+"1").innerHTML = x;
		document.getElementById("par"+i+"2").innerHTML = y;
	}
}

function check(){
	result = 0;
	for (i=1;i<=5;i++){
		par3 = parseInt(document.getElementById("par"+i+"3").value);
		par1 = parseInt(document.getElementById("par"+i+"1").innerHTML);
		par2 = parseInt(document.getElementById("par"+i+"2").innerHTML);
		if (par1+par2==par3) result = result + 20;
	}
	if (result>=80)
		alert("Sachtein");
	else
		alert("Not Sachtein");
}
