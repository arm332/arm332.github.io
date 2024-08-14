"use strict";

self.addEventListener("DOMContentLoaded", function(event) {
	console.log("window.DOMContentLoaded");
});

if (self.backButton) backButton.addEventListener("click", function(event) {
	console.log("backButton.click");
	//event.preventDefault();
	history.back();
});

if (self.testButton) testButton.addEventListener("click", function(event) {
	console.log("testButton.click");
	//event.preventDefault();
});
