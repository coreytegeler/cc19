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
		// sprout to be clicked to run the function growSproutBig
		$(newSprout).click(growSproutBig);
	}

	// Defines the function growSproutBig
	var growSproutBig = function() {
		// Adds the class "bigger" to the div that was just clicked
		$(this).addClass("big");
		// "Listens" for this to be clicked to run the function growSproutBigger
		$(this).click(growSproutBigger);
	}

	// Defines the function growSproutBigger
	var growSproutBigger = function() {
		// Adds the class "bigger" to the div that was just clicked
		$(this).addClass("bigger");
		$(this).click(growSproutBiggest);
	}

	// Defines the function growSproutBiggest
	var growSproutBiggest = function() {
		// Adds the class "biggest" to the div that was just clicked
		$(this).addClass("biggest");
	}



	// When something with the class "cell"
	// that already exists on the page load
	// gets clicked, run the function addGrass
	$(".cell").click(addGrass);

	// When something with the class "grass"
	// that already exists on the page load
	// gets clicked, run the function addGrass
	$(".cell").click(addSprout);

});