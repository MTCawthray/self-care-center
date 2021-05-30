
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
    currentMessage = `${textInput.value}`;
    viewMessage.innerText = currentMessage;
    updateAffirmations();
    hideElement(textInputLabel);
    hideElement(errorMessage);
    showElement(clearMessageButton);

  } else if (addMantraSelect.checked) {
    currentMessage = `${textInput.value}`;
    viewMessage.innerText = currentMessage;
    updateMantras();
    hideElement(textInputLabel);
    hideElement(errorMessage);
    showElement(clearMessageButton);
  }
}

function displayMessage() {
  if (!mantraSelect.checked && !affirmationSelect.checked) {
    hideElement(bellImage);
    hideElement(createMessageForm);
    showElement(errorMessage);
  } else if (mantraSelect.checked) {
    showMantra();
    showElement(clearMessageButton);
  } else if (affirmationSelect.checked) {
    showAffirmation();
    showElement(clearMessageButton);
  }
}

function displayForm() {
  hideElement(bellImage);
  hideElement(textInputLabel);
  hideElement(errorMessage);
  showElement(viewMessage);
  hideElement(clearMessageButton);
  viewMessage.innerText = ``;
  createMessageForm.classList.remove('hidden');
}

function clearError() {
  if (addMantraSelect.checked || addAffirmationSelect.checked) {
    hideElement(textInputLabel);
    hideElement(errorMessage);
  } else if (mantraSelect.checked || affirmationSelect.checked) {
    hideElement(textInputLabel);
    hideElement(errorMessage);
    // showElement(bellImage);
}
}

function showBellImage() {
  hideElement(createMessageForm);
  hideElement(textInputLabel);
  hideElement(errorMessage);
  showElement(bellImage);
  hideElement(viewMessage);
  hideElement(clearMessageButton);
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

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
