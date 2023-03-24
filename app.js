const tipAmount = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total-per-person');
const billAmount = document.getElementById('bill-amount');
const numberOfPeople = document.getElementById('number-of-people');
const radioButtons = document.querySelectorAll('input[name="tip"]');
const calculate = document.getElementById('calculate');

function calculateTotal() {
  let bill = +billAmount.value;
  let people = +numberOfPeople.value;
  let total, tipPercent;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      tipPercent = +radioButton.value.slice(0, -1);

      break;
    }
  }

  total = (bill + (bill * tipPercent) / 100) / people;
  totalPerPerson.innerHTML = total.toFixed(2);
}

calculate.addEventListener('click', calculateTotal);
