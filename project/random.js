$(document).ready(function() {

	$("#randomize").click(function() {
		$("#randomize-this a").each(function() {
			var index = Math.floor(Math.random() * $("#randomize-this a").length);
			$(this).before($("#randomize-this a")[index]);
		});
	});
	
});