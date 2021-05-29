//--------------------/array variables/----------------------//
var affirmations = [
  `I forgive myself and set myself free.`,
  `I believe I can be all that I want to be.`,
  `I am in the process of becoming the best version of myself.`,
  `I have the freedom & power to create the life I desire.`,
  `I choose to be kind to myself and love myself unconditionally.`,
  `My possibilities are endless.`,
  `I am worthy of my dreams.`,
  `I am enough.`,
  `I deserve to be healthy and feel good.`,
  `I am full of energy and vitality and my mind is calm and peaceful.`,
  `Every day I am getting healthier and stronger.`,
  `I honor my body by trusting the signals that it sends me.`,
  `I manifest perfect health by making smart choices.`
];
var mantras = [
  `Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`,
  `Don’t let yesterday take up too much of today.`,
  `Every day is a second chance.`,
  `Tell the truth and love everyone.`,
  `I am free from sadness.`,
  `I am enough.`,
  `In the beginning it is you, in the middle it is you and in the end it is you.`,
  `I love myself.`,
  `I am present now.`,
  `Inhale the future, exhale the past.`,
  `This too shall pass.`,
  `Yesterday is not today.`,
  `The only constant is change.`,
  `Onward and upward.`,
  `I am the sky, the rest is weather.`
];
// var newAffirmations = [];
// var newMantras = [];
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
var currentMessage = '';

//--------------------/event listeners/----------------------//
// window.addEventListener('load', )
receiveMessageButton.addEventListener('click', displayMessage);
addMessageButton.addEventListener('click', displayForm);
submitButton.addEventListener('click', submitMessage);
addMantraSelect.addEventListener('click', hideErrorMessage);
addAffirmationSelect.addEventListener('click', hideErrorMessage);
mantraSelect.addEventListener('click', hideErrorMessage);
affirmationSelect.addEventListener('click', hideErrorMessage);
clearMessageButton.addEventListener('click', showBellImage);

//--------------------/functions/----------------------//
//transition to the data model!
//create helper function that checks to see if newAff/newMant string exists in the aff or mant arrays.
//create logic statement to pass it to the correct array accordingly.

function submitMessage(e) {
  e.preventDefault();
  hideForm();
  if (!addMantraSelect.checked && !addAffirmationSelect.checked) {
    displayForm();
    textInputLabel.classList.toggle('hidden');

  } else if (addAffirmationSelect.checked) {
    textInputLabel.classList.add('hidden');
    viewMessage.innerText = `${textInput.value}`;
    affirmations.push(`${textInput.value}`);
    hideErrorMessage();

  } else if (addMantraSelect.checked) {
    textInputLabel.classList.add('hidden');
    viewMessage.innerText = `${textInput.value}`;
    mantras.push(`${textInput.value}`);
    hideErrorMessage();
  }
}

function displayMessage() {
  if (!mantraSelect.checked && !affirmationSelect.checked) {
    hideImage();
    hideForm()
    errorMessage.classList.remove('hidden');
  } else if (mantraSelect.checked) {
    hideImage();
    hideForm();
    hideErrorMessage();
    viewMessage.innerText = `${mantras[getRandomIndex(mantras)]}`;
  } else if (affirmationSelect.checked) {
    hideImage();
    hideForm();
    hideErrorMessage();
    viewMessage.innerText = `${affirmations[getRandomIndex(affirmations)]}`;
  }

}

function displayForm() {
  hideImage();
  hideErrorMessage();
  viewMessage.innerText = ``;
  createMessageForm.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hideImage() {
  bellImage.classList.add('hidden');
  viewMessage.classList.remove('hidden');
}
function hideForm() {
  createMessageForm.classList.add('hidden');
}

function hideErrorMessage() {
  console.log('hide error message function')
  textInputLabel.classList.add('hidden');
  errorMessage.classList.add('hidden');
}

function showBellImage() {
  console.log("clear button function")
  hideForm();
  hideErrorMessage();
  bellImage.classList.remove('hidden');
  viewMessage.classList.add('hidden');
}
