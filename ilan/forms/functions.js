function  changeOperators(x){
	for (i=1;i<=5;i++){
			document.getElementById("op"+i+"").innerHTML = x;
	}
}

function showQ(x){
	alert(x);
	for (i=1;i<=x;i++){
		document.write("<div class='oneLine'>");
		document.write("<span id='par"+i+"1'>7</span> <span id='op"+i+"'>*</span>");
		document.write("<span id='par"+i+"2'>8</span> =");
		document.write("<input id='par"+i+"3' class='result'></span><br></div>");
	}
	document.write("<div style='float:left;width:100px;height:35px;background-color:green;color:white;text-align:center;padding-top:4px;box-sizing:border-box;cursor:pointer' onclick='check()'>Check</div>");
	startProgram(x);
}

function startProgram(x){
	for (i=1;i<=x;i++){
		x1 = Math.floor((Math.random() * 10) + 1);
		y1 = Math.floor((Math.random() * 10) + 1);
		document.getElementById("par"+i+"1").innerHTML = x1;
		document.getElementById("par"+i+"2").innerHTML = y1;
	}
}

function check(){
	result = 0;
	for (i=1;i<=5;i++){
		par3 = parseInt(document.getElementById("par"+i+"3").value);
		par1 = parseInt(document.getElementById("par"+i+"1").innerHTML);
		par2 = parseInt(document.getElementById("par"+i+"2").innerHTML);
		op = document.getElementById("op"+i+"").innerHTML;
		if (op=="+"){
			if (par1 + par2 == par3) 
				result = result + 20;
		}
		else {
			if (par1 * par2 - par3 == 0){ 
				result = result + 20;
			}
		}
		
	}
	if (result>=80)
		alert("Sachtein");
	else
		alert("Not Sachtein");
}
