let price = 3.26;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
const dict = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

const changeDue = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const purchaseButton = document.getElementById("purchase-btn");
const drawerDiv = document.getElementById("drawer-div");

const updateDrawer = () => {
  drawerDiv.innerHTML = "";
  drawerDiv.innerHTML += "<h3>Change in drawer:</h3>" + cid.map((arr) => `<p>${arr[0]}: $${arr[1]}</p>`).join("");
}


const calculateChange = () => {
  
  changeDue.innerHTML = "";
  const cash = parseFloat(cashInput.value);

  if(cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if(cash == price) {
    changeDue.innerHTML += `<p>No change due - customer paid with exact cash</p>`  
    return;
  }
  
  let updatedChange = (cash - price).toFixed(2);
  let index = cid.length - 1;
  let changeString = "";
  const changeDict = {
    "PENNY": 0,
    "NICKEL": 0,
    "DIME": 0,
    "QUARTER": 0,
    "ONE": 0,
    "FIVE": 0,
    "TEN": 0,
    "TWENTY": 0,
    "ONE HUNDRED": 0
  }
  
  while (index >= 0) {
    let changeType = cid[index][0];
    if(updatedChange >= dict[changeType]) {
      changeDict[changeType] = cid[index][1] > updatedChange ? 
        (Math.floor(updatedChange / dict[changeType]) * dict[changeType]).toFixed(2) : cid[index][1];
        updatedChange = (updatedChange - changeDict[changeType]).toFixed(2);
    }

    if(updatedChange == 0) {
      for(const property in changeDict){
        if((cash - price).toFixed(2) >= dict[property]){
          changeString = `<p>${property}: $${changeDict[property]}</p>` + changeString;
        }
      }
      
      let zeroOnly = true;
      for(let i = cid.length - 1; i >= 0; i--) {
         cid[i][1] = (cid[i][1] - changeDict[cid[i][0]]).toFixed(2);
        if(cid[i][1] != 0) {
          zeroOnly = false;  
        } 
      }

      changeDue.innerHTML += zeroOnly ? "<p>Status: CLOSED</p>" : "<p>Status: OPEN</p>";
      changeDue.innerHTML += changeString;
      updateDrawer();
      return;
    }

    index--;
  }

  changeDue.innerHTML += `<p>Status: INSUFFICIENT_FUNDS</p>`  
};

purchaseButton.addEventListener("click", calculateChange);

updateDrawer();
