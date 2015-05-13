var http = require("http");
var express = require("express");

var app = express();

// Define array of objects the client will be able to query
var inputs = [{pin: "11", gpio: "17", value: 1}, {pin: "12", gpio: "18", value: 0}];

// Configure express to serve index.html
app.use(express["static"](__dirname));

// Define API middleware for server-side application (use get function to define routes)
// API routes for API calls and page requests

// Express route for incoming requests for a customer name
app.get("/inputs/:id", function(req, res) {
	res.status(200).send(inputs[req.params.id]);
});

// Express route for any other unrecognised incoming requests
app.get("*", function(req, res) {
	res.status(404).send("Unrecognised API call");
});

// Express route to handle errors
app.use(function(err, req, res, next) {
	if (req.xhr) {
		res.status(500).send("Oops, something went wrong!");
	} else {
		next(err);
	}
});

// Start server listening on port 3000
app.listen(3000);
console.log("App server running at port 3000");
