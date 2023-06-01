/*================= Script for the Form ======================*/

/*const myForm = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const message = document.querySelector('#message');
const mail = document.querySelector('#email');

function validate(event) {
  event.preventDefault();

  // Input - Gather - retrieve information / formats
  const firstNameValue = firstName.value;
  const firstNameValid = firstNameValue.length > 4;
  const lastNameValue = lastName.value;
  const lastNameValid = lastNameValue.length > 4;

  // Output / feedback
  if (firstNameValid && lastNameValid) {
    firstName.style.borderColor = 'green';
    lastName.style.borderColor = 'green';
  } else {
    firstName.style.borderColor = 'red';
    lastName.style.borderColor = 'red';
  }

  // Email
  const mailValue = mail.value;
  const mailValid = mailValue.includes('@') && mailValue.includes('.');
  if (mailValue !== '' && mailValid) {
    mail.style.borderColor = 'green';
  } else {
    mail.style.borderColor = 'red';
  }

  // Message
  const messageValue = message.value;
  const messageValid = messageValue.length >= 15;
  const loweredMess = messageValue.toLowerCase();
  const bad = loweredMess.includes('bitch');
  if (bad) {
    console.log('Blocked');
    message.innerHTML = 'message should be longer than 15 characters';
    message.style.borderColor = 'red';
  } else {
    message.style.borderColor = 'green';
  }

  if (messageValue === '') {
    message.style.borderColor = 'red';
  }

  if (firstNameValid && lastNameValid && mailValue !== '' && mailValid && messageValid && !bad) {
    myForm.innerHTML = 'Form send';
  }
}

myForm.addEventListener('submit', validate);
*/

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
  if (bad && mailValid) {
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
    myForm.innerHTML = 'Form sent.';
  }
}

myForm.addEventListener('submit', validate);
