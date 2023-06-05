/*================= Script for the Form ======================*/

const myForm = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const errorFirst = document.querySelector('#error-first');
const lastName = document.querySelector('#lastName');
const errorLast = document.querySelector('#error-last');
const mail = document.querySelector('#email');
const errorMail = document.querySelector('#error-mail');
const message = document.querySelector('#message');
const errorMessage = document.querySelector('#error-message');


function validate(event) {
  event.preventDefault();

  // Input - Gather - retrieve information / formats
  const firstNameValue = firstName.value;
  const firstNameValid = firstNameValue.length > 4;
  const lastNameValue = lastName.value;
  const lastNameValid = lastNameValue.length > 4;

  // Output / feedback
  if (firstNameValid && lastNameValid) {
    firstName.style.color = 'green';
    lastName.style.color = 'green';
  } else {
    errorFirst.style.color = 'red';
    errorFirst.innerHTML = 'First name should be at least 5 characters long.';
    errorLast.style.color = 'red';
    errorLast.innerHTML = 'Last name should be at least 5 characters long.';
  }

  // Email
  const mailValue = mail.value;
  const mailValid = mailValue.includes('@') && mailValue.includes('.');
  if (mailValue !== '' && mailValid) {
    mail.style.color = 'green';
  } else {
    errorMail.style.color = 'red';
    errorMail.innerHTML = 'Invalid email address.';
  }

  // Message
  const messageValue = message.value;
  const messageValid = messageValue.length >= 15;
  const loweredMess = messageValue.toLowerCase();
  const bad = loweredMess.includes('bitch');
  if (messageValue.length <= 15) {
    errorMessage.innerHTML= 'Message should be longer than 15 characters.';
    errorMessage.style.color = 'red';
  } else {
    message.style.color = 'green';
  }

  if (messageValue === '') {
    errorMessage.innerHTML = 'Message is required.';
    errorMessage.style.color = 'red';
  }

  if (firstNameValid && lastNameValid && mailValue !== '' && mailValid && messageValid && !bad) {
    myForm.innerHTML = 'Sorry form ist not available.';
  }
}

myForm.addEventListener('submit', validate);




