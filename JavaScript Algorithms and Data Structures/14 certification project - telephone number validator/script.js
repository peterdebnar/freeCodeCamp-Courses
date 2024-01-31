const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const check = () => {
  const phoneNumber = userInput.value;
  
  if(!phoneNumber) {
    alert("Please provide a phone number");
    return;
  }

  const regex = /(?:^1 \b\d{3}\b-\b\d{3}\b-\b\d{4}\b$)|(?:^1 \(\b\d{3}\b\) \b\d{3}\b-\b\d{4}\b$)|(?:^1\(\b\d{3}\b\)\b\d{3}\b-\b\d{4}\b$)|(?:^1 \b\d{3}\b \b\d{3}\b \b\d{4}\b$)|(?:^\b\d{10}\b$)|(?:^\b\d{3}\b-\b\d{3}\b-\b\d{4}\b$)|(?:^\(\b\d{3}\b\)\b\d{3}\b-\b\d{4}\b$)/;

  if(regex.test(phoneNumber)) {
    results.innerHTML += `<p class="valid">Valid US number: ${phoneNumber}</p>`;
    return;
  }
  results.innerHTML += `<p class="invalid">Invalid US number: ${phoneNumber}</p>`;
}

const clear = () => {
  results.innerHTML = "";
}

checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear);



