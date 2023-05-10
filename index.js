const cardNumber = document.querySelector('#incard-number')
const cardHolder = document.querySelector('#card-holder')
const cardMonth = document.querySelector('#card-month')
const cardYear = document.querySelector('#card-year')
const cardCvc = document.querySelector('#card-cvc')

const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const cardNumberInput = document.querySelector('#cardnumber')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const cvcInput = document.querySelector('#cvc')
const btnConfirm = document.querySelector('#btn-confirm')

const formSection = document.querySelector('#form-section')
const thankSection = document.querySelector('#thank-section')

cardNumberInput.addEventListener('input', formatNumber)
form.addEventListener('submit', printCardInfo)


function printCardInfo(event) {
  event.preventDefault();
  cardCvc.innerHTML = cvcInput.value
  cardNumber.innerHTML = cardNumberInput.value
  cardHolder.textContent = nameInput.value
  cardHolder.classList.toggle('px-5')
  cardMonth.innerHTML = monthInput.value
  cardYear.innerHTML = yearInput.value
  formSection.classList.toggle('hidden')
  thankSection.classList.toggle('hidden')
  
}
function formatNumber(event) {
  let currentValue = event.target.value

  let newValue = currentValue.replace(/\s/g, '');
  let groups = newValue.match(/.{1,4}/g); 
  let formattedValue = groups.join(' ')
  event.target.value = formattedValue
}