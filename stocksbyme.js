			var xhr1;var xhr2;var xhr3;var xhr4;var xhr5;var xhr6;var xhr7;var xhr8;
			function processInfo1(){
				if(xhr1.readyState==4){
					var response= xhr1.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output1").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out1").innerHTML=obj.query.results.quote.Change;
				}
			}
			function processInfo2(){
				if(xhr2.readyState==4){
					var response= xhr2.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output2").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out2").innerHTML=obj.query.results.quote.Change;
				}
			}
				function processInfo3(){
				if(xhr3.readyState==4){
					var response= xhr3.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output3").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out3").innerHTML=obj.query.results.quote.Change;
				}
			}
				function processInfo4(){
				if(xhr4.readyState==4){
					var response= xhr4.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output4").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out4").innerHTML=obj.query.results.quote.Change;
				}
			}
			function processInfo5(){
				if(xhr5.readyState==4){
					var response= xhr5.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output5").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out5").innerHTML=obj.query.results.quote.Change;
				}
			}
			function processInfo6(){
				if(xhr6.readyState==4){
					var response= xhr6.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output6").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out6").innerHTML=obj.query.results.quote.Change;
				}
			}
			function processInfo7(){
				if(xhr7.readyState==4){
					var response= xhr7.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output7").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out7").innerHTML=obj.query.results.quote.Change;
				}
			}
			function processInfo8(){
				if(xhr8.readyState==4){
					var response= xhr8.responseText;
					var obj = JSON.parse(response);
					document.getElementById("output8").innerHTML=obj.query.results.quote.LastTradePriceOnly
					document.getElementById("out8").innerHTML=obj.query.results.quote.Change;
				}
			}	


			function getInfoFromServer(){				
				xhr1=new XMLHttpRequest();
				xhr1.onreadystatechange= processInfo1;
				xhr2=new XMLHttpRequest();
				xhr2.onreadystatechange= processInfo2;
				xhr3=new XMLHttpRequest();
				xhr3.onreadystatechange= processInfo3;
				xhr4=new XMLHttpRequest();
				xhr4.onreadystatechange= processInfo4;
				xhr5=new XMLHttpRequest();
				xhr5.onreadystatechange= processInfo5;
				xhr6=new XMLHttpRequest();
				xhr6.onreadystatechange= processInfo6;
				xhr7=new XMLHttpRequest();
				xhr7.onreadystatechange= processInfo7;
				xhr8=new XMLHttpRequest();
				xhr8.onreadystatechange= processInfo8;
				xhr1.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GOOG%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr1.send();
				xhr2.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22FB%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr2.send();
				xhr3.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22MS%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr3.send();
				xhr4.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22INFY%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr4.send();
				xhr5.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22INTC%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr5.send();
				xhr6.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr6.send();
				xhr7.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GM%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr7.send();
				xhr8.open("GET", "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22HP%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json");
				xhr8.send();
			}	
			window.onload=getInfoFromServer;
