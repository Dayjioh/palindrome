const inputText = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");
const show = document.querySelector("#show");

const textInput = () => {
	const saisie = inputText.value;
	const regex = /[a-zA-Z0-9._\s]/g;
	// console.log(saisie.match(regex).join(''))
	// console.log(saisie.split("").reverse().join(""))
	if (saisie === "") {
		alert("Please input a value");
	} else if (saisie.match(regex).join('') === saisie.split("").reverse().join("")) {
		const para = document.createElement("p");
		para.innerHTML = `<strong>${saisie}</strong> is a palindrome.`;
		show.replaceChild(para, show.firstChild);
	}
};

checkButton.addEventListener("click", textInput);
inputText.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		checkButton.click();
	}
});
