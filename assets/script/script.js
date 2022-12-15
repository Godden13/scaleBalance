const firstInput = document.getElementById('input1')
const secondInput = document.getElementById('input2')
const weightList = document.getElementById('list')
const display = document.getElementById('display')
const buttonElement = document.getElementById('balance')
const arr = new Array()
let list
function scaling () {
  const a = firstInput.value
  const b = secondInput.value
  list = weightList.value
  arr = list.split(',')

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((parseInt(a) + parseInt(arr[i])) === (parseInt(b) + parseInt(arr[j]))) {
       return (`${arr[i]},${arr[j]}`)
       } else {
        return ('Cannot balance')
      }
    }
  }
}

buttonElement.addEventListener('click', () => {
  display.innerHTML = scaling()
})
