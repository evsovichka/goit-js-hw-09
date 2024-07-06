let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.js-feedback-form');
const textarea = document.querySelector('textarea');
const input = document.querySelector('input');
const storedFormData = localStorage.getItem('feedback-form-state');

if (storedFormData !== null) {
  formData = JSON.parse(storedFormData);
  textarea.value = formData['message'];
  input.value = formData['email'];
} else {
  textarea.value = '';
  input.value = '';
}

form.addEventListener('input', evt => {
  if (evt.target.name === 'email' || evt.target.name === 'message') {
    formData[evt.target.name] = evt.target.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (input.value === '' || textarea.value === '') {
    alert('«Fill please all fields»');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = { email: '', message: '' };
});
