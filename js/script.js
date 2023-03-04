(() => {
	"use strict";
	const submitButton = document.querySelector("button");
	const ratingView = document.querySelector("div.rating");
	const thankYouView = document.querySelector("div.thank-you");
	submitButton.addEventListener("click", function goToThankYou() {
		ratingView.classList.toggle("display-none");
		thankYouView.classList.toggle("display-none");
	});
})();
