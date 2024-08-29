const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const checkNum = () => {
   const inputVal = input.value;
   const regex = /^[1][\s]?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$|^(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
   
   if (!inputVal){
      alert("Please provide a phone number");
   }else{
      regex.test(inputVal) ? output.innerHTML += `<p>Valid US number:  ${inputVal}</p>` :  output.innerHTML += `<p>Invalid US number: ${inputVal}</p>`;
      input.value = "";
   }
}

checkBtn.addEventListener("click", checkNum);
clearBtn.addEventListener("click", () => output.innerHTML = "");
input.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        checkNum();
      }
});