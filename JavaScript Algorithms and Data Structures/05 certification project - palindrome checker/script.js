const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  result.innerHTML = "";
  const enteredText = textInput.value;
  if(!enteredText) {
    alert("Please input a value");
  }
  const filteredText = enteredText.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedText = filteredText.split("").reverse().join("");

  if(filteredText === reversedText){
    result.innerHTML += `<p><b>${enteredText}</b> is a palindrome</p>`;
  }
  else{
    result.innerHTML += `<p><b>${enteredText}</b> is not a palindrome</p>`;
  }
};

checkButton.addEventListener("click", checkPalindrome);