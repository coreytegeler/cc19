$(document).ready(function() {

	var water = $("#water");
	var windowWidth = $(window).innerWidth();
	var windowHeight = $(window).innerHeight();

	$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop();
		var pageHeight = $(document).innerHeight();
		
		
		var scrolledDecimal = scrollTop/(pageHeight - windowHeight);
		var scrolledPercent = 100-(scrolledDecimal*100);

		water.css({
			top: scrolledPercent+"%"
		});
	});

	var critters = $(".critter");
	$.each(critters, function(index, critter) {
		var rotate = Math.random() * (30);
		var x = Math.random() * windowWidth;
		var y = Math.random() * windowHeight;
		$(critter).css({
			transform: "rotate("+rotate+"deg)",
			left: x+"px",
			top: y+"px",
		});

		setTimeout(function() {
			$(critter).css({
				opacity: 0
			});
		}, 2000*index);

	});
});