$(document).ready(function() {
	
	// $(".square").click(function() {
	// 	$(this).removeClass("square");
	// 	$(this).addClass("circle");
	// });

	// $(".circle").click(function() {
	// 	$(this).removeClass("circle");
	// 	$(this).addClass("square");
	// });

	$(".cell").click(function() {
		$(this).toggleClass("square circle");
	});

});