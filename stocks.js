var stockSymbols = ["MS", "GOOG", "INTC", "AAPL", "GM", "FB", "INFY", "HP"];
var xhr = null;
var lastTradePrice = [];
function sendAjaxRequest(){
	xhr = new XMLHttpRequest();
	var url = ""
	for(var i = 0;i<stockSymbols.length;i++){
		url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+stockSymbols[i]+"%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";
		
		xhr.open("GET",url,false);
		xhr.onreadystatechange = callMe;
		xhr.send();
	}
	populateTable();
}

function callMe () {

	if(xhr.readyState == 4){
		var response = xhr.responseText;
		var jsonResponse = JSON.parse(response);

		var tradeprice = jsonResponse.query.results.quote.LastTradePriceOnly;
		var change = jsonResponse.query.results.quote.Change;
		var symbolStr = jsonResponse.query.results.quote.symbol;

		var tradePriceString = {symbol:symbolStr,tradePrice:tradeprice,changeVal:change};
		//var changeString = {symbol:symbolStr,changeVal:change};
		lastTradePrice.push(tradePriceString);
		//lastChange.push(changeString);
	}
	
}

function populateTable(){
	var table = document.getElementById("stockTable");
	
	for(var i = 0;i<lastTradePrice.length;i++){
		
		if(lastTradePrice[i].changeVal.match(/\+/)){
			table.innerHTML += "<tr><td>"+lastTradePrice[i].symbol+"</td><td>"+lastTradePrice[i].tradePrice+"</td><td class='positive'>"+lastTradePrice[i].changeVal+"</td></tr>";
		}else{
			table.innerHTML += "<tr><td>"+lastTradePrice[i].symbol+"</td><td>"+lastTradePrice[i].tradePrice+"</td><td class='negative'>"+lastTradePrice[i].changeVal+"</td></tr>";
		}
	}
}
