const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = () => {
  
  output.innerHTML = "";

  if(!numberInput.value) {
    output.innerHTML += `<p>Please enter a valid number</p>`
    return;
  }
  
  const number = parseInt(numberInput.value);
  const romanArr = ["M", "CM","D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  if(number < 1) {
    output.innerHTML += `<p>Please enter a number greater than or equal to 1</p>`
    return;
  }
  if(number > 3999) {
    output.innerHTML += `<p>Please enter a number less than or equal to 3999</p>`
    return;
  }
  
  let remainder = number;
  let index = 0;
  let romanString = "";
  while(remainder !== 0){
    let times = Math.floor(remainder / arabic[index]);
    for(let i = 0; i < times; i++) {
      romanString += romanArr[index];
    }
    remainder -= times * arabic[index];
    index++;
  }

  output.innerHTML += `<p>${romanString}</p>`;

}

convertButton.addEventListener("click", convert);