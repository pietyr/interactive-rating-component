(() => {
	"use strict";
	const submitButton = document.querySelector("button");
	const ratingView = document.querySelector("div.rating");
	const thankYouView = document.querySelector("div.thank-you");
	const output = document.querySelector("output");
	const errorP = document.createElement("p");
	errorP.classList.add("error");
	errorP.innerHTML = "You have to select rating";
	let errorShown = false;
	submitButton.addEventListener("click", function goToThankYou() {
		const checkedButton = document.querySelector("input:checked");
		if (checkedButton != null) {
			const score = checkedButton.getAttribute("value");
			output.innerHTML = score;
			ratingView.classList.toggle("display-none");
			thankYouView.classList.toggle("display-none");
		} else {
			ratingView.appendChild(errorP);
			errorShown = true;
		}
	});
	document
		.querySelector("ul")
		.addEventListener("click", function hideError(e) {
			if (errorShown && e.target.nodeName == "LABEL") {
				ratingView.removeChild(errorP);
				errorShown = false;
			}
		});
})();
