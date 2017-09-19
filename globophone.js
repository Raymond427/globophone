let storage = window.localStorage;
let signUpForm = document.getElementById('sign-up__form');
let nameInput = document.getElementById('name__field');
let phoneInput = document.getElementById('tel__field');

if(storage.length !== 0) {
   nameInput.value = storage.getItem('name');
   phoneInput.value = storage.getItem('tel');
}

function formIsValid(form) {
   let nameInput = document.getElementById('name__field');
   let phoneInput = document.getElementById('tel__field');
   let formValid = true;
   if(nameInput.value === undefined || nameInput.value === '') {
      formValid = false;
      document.getElementById('name__error-message').style.display = 'block';
   } else {
      document.getElementById('name__error-message').style.display = 'none';
   }
   if (phoneInput.value === undefined || phoneInput.value[0] === '0' || phoneInput.value.length < 10 || phoneInput.value.length > 11) {
      formValid = false;
      document.getElementById('tel__error-message').style.display = 'block';
   } else {
      document.getElementById('tel__error-message').style.display = 'none';
   }
   return formValid;
}

function storeFormData(form) {
   let nameInput = document.getElementById('name__field');
   let phoneInput = document.getElementById('tel__field');
   storage.setItem('name', nameInput.value);
   storage.setItem('tel', phoneInput.value);
}

function displayFormData() {
   document.getElementById('form-data__name').innerText = `Saved name of ${storage.getItem('name')}`;
   document.getElementById('sign-up__form').style.display = 'none';
   document.getElementById('form-data').style.display = 'block';
}

function displayForm() {
   document.getElementById('form-data').style.display = 'none';
   if(storage.length !== 0) {
      document.getElementById('clear-form').style.display = 'inline-block';
   }
   document.getElementById('sign-up__form').style.display = 'block';
}

document.getElementById('clear-form').addEventListener('click', (event) => {
   event.preventDefault();
   signUpForm.reset();
   storage.clear();
});

document.getElementById('submit-form').addEventListener('click', (event) => {
   event.preventDefault();
   if (formIsValid(signUpForm)) {
      storeFormData(signUpForm);
      displayFormData();
   }
});

document.getElementById('back-to-form').addEventListener('click', (event) => {
   displayForm();
});
