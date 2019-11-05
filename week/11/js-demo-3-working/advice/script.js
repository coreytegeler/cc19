$(document).ready(function() {

	// This is your API URL: https://api.adviceslip.com/advice

	var getAdvice = function() {
		var url = "https://api.adviceslip.com/advice";
		$.get(url, giveAdvice);
	}

	var giveAdvice = function(data) {
		var dataObject = JSON.parse(data);
		var advice = dataObject["slip"]["advice"];
		$("#advice-text").text(advice);
	}

	$("#button").click(getAdvice);
	
});