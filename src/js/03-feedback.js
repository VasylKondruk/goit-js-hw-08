import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(localData, 500));

function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function getLocalData() {
  let localData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

getLocalData();

feedbackForm.addEventListener('submit', submitData);

function submitData(e) {
  e.preventDefault();
  this.reset();
  console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  localStorage.removeItem('feedback-form-state');
}
