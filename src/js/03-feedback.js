
import throttle from 'lodash.throttle';

const refs = {
  inputEmail: document.querySelector('input[name="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};

const StorageKey = 'feedback-form-state';
const data = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const { email, message } = JSON.parse(savedData) || {};
  refs.inputEmail.value = email;
  refs.inputMessage.value = message;
}

refs.form.addEventListener('input', throttle(dataHandler, 500));

function dataHandler() {
  data.email = refs.inputEmail.value;
  data.message = refs.inputMessage.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (!refs.inputEmail.value || !refs.inputEmail.value) {
    alert('input the data');
  } else {
    localStorage.removeItem('feedback-form-state');
    refs.inputEmail.value = '';
    refs.inputMessage.value = '';
    console.log(data);
  }
}
