const TASK_NOT_DONE_CLASS = 'task-not-done';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'task-done';
const done =true;


const idEl = document.querySelector('#id');
const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');
const taskITemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

newTaskForm.addEventListener('submit', onNewTaskFormSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskListEl.addEventListener('click', onListClick);

let list = [];

init();

function onNewTaskFormSubmit(event) {
    event.preventDefault();

    if (!validateInput()) return;

    const newTodo = getFormData();
    saveTodo(newTodo);
    resetForm();
}


function onListClick(e) {
   
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const todoId = gettodoId(e.target.parentElement);
        deleteTodo(todoId);
    }
    else if (e.target.classList.contains(TASK_NOT_DONE_CLASS)) {
        toggleTodo(e.target);
        const todoId = gettodoId(e.target);
        changeStatus(todoId,done);
           }
    else if (e.target.classList.contains(TASK_DONE_CLASS)) {
        toggleTodo(e.target);
        const todoId = gettodoId(e.target);
        changeStatus(todoId)
    }
    }

function init() {
    fetchTodoList();
    renderTodoList(list);
}
function fetchTodoList() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10') // Promise
        .then((res) => res.json())
        .then((data) => {
            list = data;
            renderTodoList(list);
        });
}
function renderTodoList(list) {
    taskListEl.innerHTML = '';
    list.forEach(renderTodo);
}
function renderTodo(todo) {
    const todoHtml = getTodoHtml(todo);

    taskListEl.insertAdjacentHTML('beforeend', todoHtml);
}

function getTodoHtml({ id, title, completed}) {
    
    return taskITemTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{title}}', title)
        .replaceAll('{{completed}}',completed ? TASK_DONE_CLASS : TASK_NOT_DONE_CLASS);
}

function saveTodo(todo) {
    if (!todo.id) {
        addTodo(todo);
}
}

function addTodo(todo) {
    todo.id = Date.now();
    todo.completed = false;
    list.push(todo);
    renderTodoList(list);
}



function deleteTodo(id) {
    list = list.filter((item) => item.id !== id);

    renderTodoList(list);
}

function gettodoId(elem) {
    return +elem.dataset.contactId;
}


function onTaskNameInput() {
    validateInput();
}

function validateInput() {
    const value = taskNameInput.value;

    return validateValue(value);
}

function getFormData() {
    return {
        title: taskNameInput.value,
        completed:TASK_NOT_DONE_CLASS
    };
}

function resetForm() {
    taskNameInput.value = '';
}

function toggleTodo(todoEl) {
    todoEl.classList.toggle(TASK_DONE_CLASS);
}

function validateValue(value) {
    if (value === '') {
        errorContainerEl.textContent = 'Todo Name is required';
        submitBtn.disabled = true;
        return false;
    } else {
        errorContainerEl.textContent = '';
        submitBtn.disabled = false;

        return true;
    }
}
function changeStatus(id,condition){
    const selectedTodo = list.find((item) => item.id === id);
    if (condition===done) selectedTodo.completed=true;
    else selectedTodo.completed=false;
    renderTodoList(list);
}