const inputText = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const textInput = (e) => {
	e.preventDefault();
	const saisie = inputText.value;
	if (saisie === "") {
		alert("Please input a value");
	} else if (saisie === saisie.split("").reverse().join("")) {
		const para = document.createElement("p");
		para.innerHTML = `${saisie} is a palindrome`;
		result.appendChild(para);
		const para1 = document.createElement("p")
		result.replaceWith(para1)
	}
	// para.innerHTML = "";
};

checkButton.addEventListener("click", textInput);
