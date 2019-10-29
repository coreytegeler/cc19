// Wait for page to load
$(document).ready(function() {
	// Run function everytime a user moves their
	// mouse on the page. "event" is a variable that 
	// gets created with data about the mousemove event
	$(window).mousemove(function(event) {
		// Sets a variable for the width of the window in pixels
		var windowWidth = $(window).width();
		// Sets a variable for the x position of the cursor 
		// on the page in pixels (distance from left edge)
		var x = event.pageX;
		// Sets a variable for the y position of the cursor 
		// on the page in pixels (distance from left edge)
		var y = event.pageY;
		// Calculates the percentage of the x position
		var xPercent = (x/windowWidth)*100;


		/////////DO NOT EDIT ABOVE THIS LINE//////////

		// Define a variable "color" depending on different "conditionals"
		// Is the mouse less than a quarter of the way across the screen?
		// If not, is the mouse less than half of the way across the screen?
		// If not, is the mouse less than three quarters of the way across the screen?
		// If none of the above

		/////////DO NOT EDIT BELOW THIS LINE//////////

		// Creates a new "virtual" div, sets it
		// to a variable called "circle"
		var circle = $("<div></div>");
		// Adds a class to the div
		circle.addClass("circle");

		// Sets CSS styles to the div
		circle.css({
			left: x,
			top: y,
			backgroundColor: color
		});

		// Adds the div to the page
		$("body").append(circle);
	});
});