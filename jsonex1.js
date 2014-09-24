var generate= function(obj){
	var queryString="";
	for(var key in obj){
		var value=obj[key];
		if(obj[key].push!=undefined){
			var temp="";
			for(var i=0; i<obj[key].length;i++){
				temp+=obj[key][i]+"_";
			}
			temp=temp.substring(0,temp.length-1);
			queryString+=key+"="+temp+"&";
		}
		else
			queryString+=key+"="+value+"&";
	}
	queryString=queryString.substring(0,queryString.length-1);
	console.log(queryString);

}
generate({name:"Sam",age:12,hobbies:["TV","Music"]});
