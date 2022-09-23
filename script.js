const taskElem=document.querySelector('#taskElement');
const liElem=document.querySelector('#liElement');
const btn = document.querySelector('#addInformation');
btn.addEventListener('click', onBtnClick);

//*************************//

function onBtnClick(){

     if (!validateTasks()){
         return;
     }
    const newTask = getTask();
    addNewTask(newTask);
     resetForm();
}

function getTask(){
    return taskElem.value;
               
}

function addNewTask(task){
    const taskEl = generateNewTask(task);
    liElem.append(taskEl);
}

function generateNewTask(value){
    const liEl = document.createElement('li');
    liEl.textContent = value;
    liEl.addEventListener('click', ()=>liEl.classList.toggle("task-done"));
    return liEl;
}

function resetForm(){
    taskElem.value = '';
}

function validateTasks(){
    resetValidation();
    
    if (taskElem.value === '') {
        taskElem.classList.add('invalid-input');
        return false
    };

    return true
}

function resetValidation(){
    taskElem.classList.remove('invalid-input');
  
}

