$(document).ready(function() {

	/////// Visit https://api.nasa.gov/
	/////// Fill out and submit the form under "Generate API Key"
	/////// Create a new variable called "requestUrl"
	/////// Set "requestUrl" to equal the generated URL from NASA
	var url = "https://api.nasa.gov/planetary/apod?api_key=6GSXsugvbrV4iSmwiOFBIs4tlrKvuUcZKS1QpBPj";

	/////// Create a new object variable called "params"
	/////// Set the object to have a key named "date"
	/////// Set the vakue of "date" to be your birthday in YYYY-MM-DD format
	var params = {
		date: "2010-10-31"
	}


	var callback = function(data) {
		console.log(data);

		/////// Create a variable called "imageUrl"
		/////// Set "imageUrl" to equal the "url" value of the data object
		var imageUrl = data["url"];

		/////// Add the image as an IMG element
		var image = $("<img/>");
		image.attr({
			src: imageUrl
		});
		$("body").append(image);

		///// Add the image to the background of something
		// $("body").css({
		// 	background: "url("+imageUrl+")"
		// });

		///// Add some of the the text
		var title = $("<h1></h1>");
		title.text(data["title"]);
		$("body").append(title);

		var explanation = $("<h3></h3>");
		explanation.text(data["explanation"]);
		$("body").append(explanation);
	}

	

	/////// Do a get request and pass the arguments: requestUrl, requestParams, and the callback function
	$.get(url, params, callback);

});