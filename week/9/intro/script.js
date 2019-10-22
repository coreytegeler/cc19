$(document).ready(function() {
	
	var text = "Hello world!";
	var box = $("#box");

	var addTextToBox = function() {
		var textBox = $("<span></span>");
		textBox.addClass("text-box");
		textBox.append(text);
		box.append(textBox);
	}

	box.click(addTextToBox);

});