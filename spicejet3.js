$().ready(init);
function init()
{
	$("#option1").menu({ position: { my: "left top", at: " top+30" } });
	$("#tabs").tabs();
	$("#mydate").datepicker();
	$("#mydate1").datepicker();
	$(document).tooltip();
	$("#oneway").on("change",one);
	$("#twoway").on("change",two);
	$("#from").on("click",display);
	$("#to").on("click",display);
}

	function display()
	
			{
				$( "#dialog" ).dialog();
				$.ajax({
					url:"airports.json",
					success: function(response){
						var str="";
						console.log(response);
						$.each(response.airports,function(index,item){
							str += item.city + "<br>";
						});
						$("#dialog").html(str);
						$( "#dialog" ).dialog();
					}				
				});
			}



function one()
{
	
	$("#mydate1").hide();
}

function two()
{
	$("#mydate1").show();
}
