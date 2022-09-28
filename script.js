const DELETE_BTN_CLASS = 'delete-btn';

const contactsListEl = document.querySelector('#contactsList');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const addBtnEl = document.querySelector('#addContactBtn');
const errorMessageEl = document.querySelector('#errorContainer');
const formInput=document.querySelector('#ContactListInput');

const taskITemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

addBtnEl.addEventListener('click', onAddContactBtnClick);
contactsListEl.addEventListener('click', onFormClick);
formInput.addEventListener('input', onFormInput);

function onAddContactBtnClick(){
   if (!validateInput()) return;
    const newContact = getFormValues();

    addContact(newContact);
    resetForm();
    
}

function onFormInput(){
    validateInput();
}

function onFormClick(event) {
    
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(event.target.parentElement.parentElement);
    }
}
function deleteContact(contactEl) {
    contactEl.remove();
}


function getFormValues(){
    return {
        name: nameEl.value,
        surname: surnameEl.value,
        phone: phoneEl.value,
    }
}

function addContact(contact) {
   
    const contactHtml = generateContactHtml(contact);
    contactsListEl.insertAdjacentHTML('beforeEnd', contactHtml); 
}

function generateContactHtml(contactAdded) {
    
   let template= taskITemTemplate.replaceAll('{{name}}', contactAdded.name ) 
      .replaceAll('{{surname}}', contactAdded.surname)
      .replaceAll('{{phone}}', contactAdded.phone);
    return template;
}

function resetForm(){
    nameEl.value = '';
    surnameEl.value = '';
    phoneEl.value = '';
}

function validateInput() {
    const value =getFormValues();
    return validateValues(value);
}

function validateValues(value) {
    if ((value.name === '')||(value.surname=== '')||(value.phone=== '')) {
        errorMessageEl.textContent ='Adding a new contact is impossible, entered all fields';
        addBtnEl.disabled = true;
        return false;
    } else {
        errorMessageEl.textContent = '';
        addBtnEl.disabled = false;
        return true;
    }
}