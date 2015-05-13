window.onload = function() {
	var url,
	i,
	jqxhr;

	for (i = 0; i < 2; i++) {
		
		url = document.URL + "inputs/" + i;
		
		jqxhr = $.getJSON(url, function(data) {
			$("#input").append("<p>input gpio port " + data["gpio"] + " on pin " + data["pin"] 
				+ "has current value of " + data["value"] + "</p>");
		
		console.log("API response received");
		
		)};
	}
};
