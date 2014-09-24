function swapnames(){
	var from=document.getElementById("from_city").value;
	var to=document.getElementById("to_city").value;
	
	document.getElementById("from_city").value=to;
	document.getElementById("to_city").value=from;
}
function oneway(){
	document.getElementById("Returndate").disabled=true;
}
function roundtrip(){
	document.getElementById("Returndate").disabled=false;
}
function incr(){
	var a=parseInt(document.getElementById("inc_adult").value);
	a++;
	document.getElementById("inc_adult").value=a;
}
function decr(){
	var b=parseInt(document.getElementById("inc_adult").value);
	b--;
	document.getElementById("inc_adult").value=b;

}
var xhr;
function getInfo(){
	xhr = new XMLHttpRequest();
	xhr.open("GET","cities.jsp");
	xhr.onreadystatechange = getCities;
	xhr.send();
}
function getCities(){
	if(xhr.readyState == 4){
		var response = xhr.responseText;
		var arr = response.split(",");
		var output = "";
		for(var i=0;i<arr.length;i++){
			output += "<option>" + arr[i] + "</option>";
		}
		document.getElementById("from_city").innerHTML = "<option>TYPE DEPARTURE CITY</option>" + output;
		document.getElementById("to_city").innerHTML = "<option>TYPE DESTINATION CITY</option>" + output;
	}
}
