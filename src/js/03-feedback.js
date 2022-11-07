
import throttle from 'lodash.throttle';

const LOCALSTORAGE_FORM = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');
console.log(formEl)

let dataImput = JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM)) || {};

formEl.addEventListener('submit',handleSubmit)
formEl.addEventListener('input', throttle(onFormInput, 500)) 

    
function onFormInput(event){
    dataImput.email = emailEl.value;
  dataImput.message = messageEl.value;
  localStorage.setItem(LOCALSTORAGE_FORM, JSON.stringify(dataImput));
 }

function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_FORM);
    console.log(dataImput);
}

initForm() 

 function initForm() {
    const saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_FORM));
  if (saveData) {
    emailEl.value = saveData.email;
    messageEl.value = saveData.message;
    }
  }
  