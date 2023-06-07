const counter = document.querySelector("#counter");

let countingNumber = 0;

function changeCount(num) {
  countingNumber += num;
  counter.innerHTML = countingNumber;
}
