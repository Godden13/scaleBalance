const firstInput = document.getElementById("input1");
const secondInput = document.getElementById("input2");
const weightList = document.getElementById("list");
const display = document.getElementById("display");
const buttonElement = document.getElementById("balance");
let list;

function scaling() {
  const valueA = firstInput.value;
  const valueB = secondInput.value;
  list = weightList.value;
  const arr = list.trim().split(",");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        parseInt(valueA) + parseInt(arr[i]) ===
        parseInt(valueB) + parseInt(arr[j])
      ) {
        console.log("Hello");

        return `${arr[i]},${arr[j]}`;
      } 
    }
  } {
    console.log("Hi");

    return "cannot balance";
  }

}


buttonElement.addEventListener("click", () => {
  display.innerHTML = scaling();
});
