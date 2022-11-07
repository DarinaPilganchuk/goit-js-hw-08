
import throttle from 'lodash.throttle';

const LOCALSTORAGE_FORM = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
console.log(formEl)
formEl.addEventListener('submit',handleSubmit)
formEl.addEventListener('input', throttle(onFormInput, 500)) 
initForm()
    

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formEl)
  formData.forEach((value, message) => 

  console.log(`${value}:Email,  ${message} :Message`))
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_FORM);
}

 function onFormInput(event){
    let currentValues = localStorage.getItem(LOCALSTORAGE_FORM);
    currentValues = currentValues ? JSON.parse(currentValues) : {};
    currentValues[event.target.message] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_FORM, JSON.stringify(currentValues));
 }
 function initForm() {
    let currentValues = localStorage.getItem(LOCALSTORAGE_FORM);
    if (currentValues) {
        currentValues = JSON.parse(currentValues);
      Object.entries(currentValues).forEach(([value,message]) => {
        formEl.elements[message].value = value;
      });
    }
  }