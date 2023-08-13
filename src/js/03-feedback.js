import throttle from 'lodash.throttle';

const refs = {
  inputEmail: document.querySelector('input[name="email"]'),
  inputMessage: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};

const data = {
  email: "",
  message: "",
};


const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  refs.inputEmail.value = savedData.email;
  refs.inputMessage.value = savedData.message;
  data.email = savedData.email;
  data.message = savedData.message;
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
  localStorage.removeItem('feedback-form-state');
  resetForm(refs.form); 
  console.log(data);
}

function resetForm(form) {
  form.reset();
  data.email = "";
  data.message = "";
  localStorage.removeItem('feedback-form-state');
}
