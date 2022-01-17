const discover = document.querySelector('.discover');
const cvvInput = document.querySelector('#cvv');
const cardNumberInput = document.querySelector('#card-number');

const classAdder = (className) => {
  discover.classList.add(className);
}

cvvInput.addEventListener('input', () => {
  classAdder('flip');
});

cardNumberInput.addEventListener('blur', () => {
  discover.className = '';
  classAdder('credit-card__wrapper');
  classAdder('discover');
  
  switch (cardNumberInput.value[0]) {
    case '3':
      classAdder('american');
      break;
    case '4':
      classAdder('visa');
    break;
    case '5':
      classAdder('mastercard');
    break;
    case '6':
      classAdder('discover');
    break;
  }
});
