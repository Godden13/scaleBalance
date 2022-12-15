let firstInput = document.getElementById('input1')
let secondInput = document.getElementById('input2')
let weightList = document.getElementById('list')
let display = document.getElementById('display')
let buttonElement = document.getElementById('balance')
let arr = new Array()
var list
function scaling() {
  let a = firstInput.value;
  let b = secondInput.value;
  list = weightList.value
  arr = list.split(',')
  

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((parseInt(a)+ parseInt(arr[i])) === (parseInt(b)+ parseInt(arr[j]))) {
       return (`${arr[i]},${arr[j]}`)
      }else {
        return (`Cannot balance`)
      }
    }
  }
}

buttonElement.addEventListener('click', () => {
  display.innerHTML = scaling()
})
