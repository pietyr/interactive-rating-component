(() => {
	"use strict";
	const submitButton = document.querySelector("button");
	const ratingView = document.querySelector("div.rating");
	const thankYouView = document.querySelector("div.thank-you");
	const output = document.querySelector("output");
	submitButton.addEventListener("click", function goToThankYou() {
		const checkedButton = document.querySelector("input:checked");
		if (checkedButton != null) {
			const score = checkedButton.getAttribute("value");
			output.innerHTML = score;
			ratingView.classList.toggle("display-none");
			thankYouView.classList.toggle("display-none");
		}
	});
})();
