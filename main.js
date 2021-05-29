
//--------------------/querySelectors/----------------------//

var affirmationSelect = document.querySelector('#show-affirmation');
var mantraSelect = document.querySelector('#show-mantra');
var receiveMessageButton = document.querySelector('.receive-message');
var messageBox = document.querySelector('.display-box');
var bellImage = document.querySelector('img');
var viewMessage = document.querySelector('.view-message-area');
var addMessageButton = document.querySelector('.add-message');
var createMessageForm = document.querySelector('.custom-message');
var addMantraSelect = document.querySelector('#create-mantra');
var addAffirmationSelect = document.querySelector('#create-affirmation');
var submitButton = document.querySelector('.submit');
var textInput = document.querySelector('.message-input');
var textInputLabel = document.querySelector('.input-error');
var errorMessage = document.querySelector('.receive-error');
var clearMessageButton = document.querySelector('.clear-message');

//--------------------/event listeners/----------------------//

receiveMessageButton.addEventListener('click', displayMessage);
addMessageButton.addEventListener('click', displayForm);
submitButton.addEventListener('click', submitMessage);
clearMessageButton.addEventListener('click', showBellImage);
addMantraSelect.addEventListener('click', clearError);
addAffirmationSelect.addEventListener('click', clearError);
mantraSelect.addEventListener('click', clearError);
affirmationSelect.addEventListener('click', clearError);

//--------------------/functions/----------------------//

function submitMessage(e) {
  e.preventDefault();
  hideElement(createMessageForm);
  if (!addMantraSelect.checked && !addAffirmationSelect.checked || !textInput.value) {
    showElement(createMessageForm);
    textInputLabel.classList.toggle('hidden');

  } else if (addAffirmationSelect.checked) {
    textInputLabel.classList.add('hidden');
    currentMessage = `${textInput.value}`;
    viewMessage.innerText = currentMessage;
    updateAffirmations();
    hideElement(textInputLabel);
    hideElement(errorMessage);

  } else if (addMantraSelect.checked) {
    textInputLabel.classList.add('hidden');
    currentMessage = `${textInput.value}`;
    viewMessage.innerText = currentMessage;
    updateMantras();
    hideElement(textInputLabel);
    hideElement(errorMessage);
  }
}

function displayMessage() {
  if (!mantraSelect.checked && !affirmationSelect.checked) {
    hideElement(bellImage);
    hideElement(createMessageForm);
    showElement(errorMessage);

  } else if (mantraSelect.checked) {
    showMantra();

  } else if (affirmationSelect.checked) {
    showAffirmation();
  }

}

function displayForm() {
  hideElement(bellImage);
  hideElement(textInputLabel);
  hideElement(errorMessage);
  showElement(viewMessage);
  viewMessage.innerText = ``;
  createMessageForm.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function hideImage() {
//   bellImage.classList.add('hidden');
//   viewMessage.classList.remove('hidden');
// }

// function hideForm() {
//   createMessageForm.classList.add('hidden');
// }

function clearError() {
  if (addMantraSelect.checked || addAffirmationSelect.checked) {
    hideElement(textInputLabel);
    hideElement(errorMessage);

  } else if (mantraSelect.checked || affirmationSelect.checked) {
    hideElement(textInputLabel);
    hideElement(errorMessage);
    // showElement(bellImage);
}
  // showElement(bellImage);
//   // textInputLabel.classList.add('hidden');
//   // errorMessage.classList.add('hidden');
}

function showBellImage() {
  hideElement(createMessageForm);
  hideElement(textInputLabel);
  hideElement(errorMessage);
  showElement(bellImage);
  hideElement(viewMessage);
}

function updateMantras() {
  if (!mantras.includes(currentMessage)) {
    mantras.push(currentMessage);
  }
}

function updateAffirmations() {
  if (!affirmations.includes(currentMessage)) {
    affirmations.push(currentMessage);
  }
}

function showMantra() {
  hideElement(bellImage);
  hideElement(createMessageForm);
  hideElement(textInputLabel);
  hideElement(errorMessage);
  showElement(viewMessage);
  viewMessage.innerText = `${mantras[getRandomIndex(mantras)]}`;
}

function showAffirmation() {
  hideElement(bellImage);
  hideElement(createMessageForm);
  hideElement(textInputLabel);
  hideElement(errorMessage);
  showElement(viewMessage);
  viewMessage.innerText = `${affirmations[getRandomIndex(affirmations)]}`;
}

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}
