import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector("input[name='email'");
const messageEl = document.querySelector("textarea[name='message'");

const saveData = () => {
  const data = {
    email: emailEl.value,
    message: messageEl.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const updateData = () => {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    emailEl.value = data.email || '';
    messageEl.value = data.message || '';
  }
};

window.addEventListener('load', updateData);

emailEl.addEventListener('input', throttle(saveData, 500));
messageEl.addEventListener('input', throttle(saveData, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = {
    email: emailEl.value,
    message: messageEl.value,
  };
  console.log('Data:', data);
  localStorage.removeItem('feedback-form-state');
  emailEl.value = '';
  messageEl.value = '';
});
