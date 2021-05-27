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
var savedAffirmations = [];
//--------------------/querySelectors/----------------------//
var affirmationSelect = document.querySelector('#affirmation');
var mantraSelect = document.querySelector('#mantra');
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
var currentMessage = '';

//--------------------/event listeners/----------------------//
// window.addEventListener('load', )
receiveMessageButton.addEventListener('click', displayMessage);
addMessageButton.addEventListener('click', displayForm);
submitButton.addEventListener('click', submitMessage);

//--------------------/functions/----------------------//

function submitMessage(e) {
  e.preventDefault();
  hideForm();
  if (!addMantraSelect.checked && !addAffirmationSelect.checked) {
    alert('You must select either Add an affirmation OR Add a mantra to be able to submit your message!');
    displayForm();
  } else if (addAffirmationSelect.checked) {
    viewMessage.innerText = `${textInput.value}`;
    affirmations.push(`${textInput.value}`);
  } else if (addMantraSelect.checked) {
    viewMessage.innerText = `${textInput.value}`;
    mantras.push(`${textInput.value}`);
  }
}

function displayMessage() {
  if (mantraSelect.checked) {
    hideImage();
    hideForm();
    viewMessage.innerText = `${mantras[getRandomIndex(mantras)]}`;
  } else if (affirmationSelect.checked) {
    hideImage();
    viewMessage.innerText = `${affirmations[getRandomIndex(affirmations)]}`;
  }

}

function displayForm() {
  hideImage();
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
