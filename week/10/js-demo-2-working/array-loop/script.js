// Wait for page to load
$(document).ready(function() {
	
	// Create an array named "colors" with at least
	// 5 different CSS color values
	var colors = [
		"rebeccapurple",
		"cornflowerblue",
		"red",
		"blue"
	];


	// Defining a function expecting two arguments
	var changeColor = function(index, color) {

		// Creates a delay on verything inside the function
		setTimeout(function() {
			// Sets the CSS background to the variable color;
			$("body").css({
				background: color
			});
		// Delay is set to multiply 1 second by
		// whichever number in the array this
		// color is, staggering the transitions
		}, 1000*index);
	}


	$("body").click(function() {
		// Loop through the "colors" array
		// run the function "changeColor"
		// and pass the index and value
		// through the function
		$.each(colors, changeColor);
	});

});