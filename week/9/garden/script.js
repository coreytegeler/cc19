$(document).ready(function() {
	
	// Defines the function addGrass
	var addGrass = function() {
		// this = the thing that was clicked
		// $(this) = the thing that was clicked + jQuery super powers!
		$(this).removeClass("soil");
		$(this).addClass("grass");
		// "Listens" for this newly planted
		// grass to be clicked again
		$(this).click(addSprout);
	}
	
	// When something with the class "cell"
	// gets clicked, run the function addGrass
	$(".cell").click(addGrass);


	// Defines the function addSprout
	var addSprout = function() {
		// Creates a virtual div, to be
		// added to the page later
		var newSprout = $("<div></div>");
		// Adds the class "sprout" to the div
		newSprout.addClass("sprout");
		// Adds the sprout div to the thing that was just clicked
		$(this).append(newSprout);
		// "Listens" for this newly planted
		// sprout to be clicked to run the function growSprout
		$(newSprout).click(growSprout);
	}

	// Defines the function growSprout
	var growSprout = function() {
		// Adds the class "grow" to the div that was just clicked
		$(this).addClass("grow");
	}

});