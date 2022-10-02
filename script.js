const TASK_NOT_DONE_CLASS = 'task-not-done';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_DONE_CLASS = 'task-done';


const idEl = document.querySelector('#id');
const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');
const taskITemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

newTaskForm.addEventListener('submit', onNewTaskFormSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskListEl.addEventListener('click', onListClick);



let list = [
    { id: 1, title:'Task 1',status:TASK_NOT_DONE_CLASS},
    { id: 2, title:'Task 2',status: TASK_NOT_DONE_CLASS },
    { id: 3, title:'Task 3',status:TASK_DONE_CLASS},
];

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
        const TodoId = getTodoId(e.target.parentElement);
        deleteTodo(TodoId);
    }
    else if (e.target.classList.contains(TASK_NOT_DONE_CLASS)) {
        toggleTodo(e.target);
        const TodoId = getTodoId(e.target);
        changeStatus(TodoId,"done");
           }
    else if (e.target.classList.contains(TASK_DONE_CLASS)) {
        toggleTodo(e.target);
        const TodoId = getTodoId(e.target);
        changeStatus(TodoId,"notDone")
    }
    }

function init() {
    renderTodoList(list);
}
function renderTodoList(list) {
    taskListEl.innerHTML = '';
    list.forEach(renderTodo);
}
function renderTodo(Todo) {
    const todoHtml = getTodoHtml(Todo);

    taskListEl.insertAdjacentHTML('beforeend', todoHtml);
}

function getTodoHtml({ id, title,status }) {
    
    return taskITemTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{title}}', title)
        .replaceAll('{{status}}', status);
}

function saveTodo(Todo) {
    if (!Todo.id) {
        addTodo(Todo);
}
}

function addTodo(Todo) {
    Todo.id = Date.now();
    list.push(Todo);
    renderTodoList(list);
}



function deleteTodo(id) {
    list = list.filter((item) => item.id !== id);

    renderTodoList(list);
}

function getTodoId(elem) {
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
        status:TASK_NOT_DONE_CLASS
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
function changeStatus(id,action){
    const selectedTodo = list.find((item) => item.id === id);
    if (action==="done") selectedTodo.status=TASK_DONE_CLASS;
    else if (action==="notDone")selectedTodo.status=TASK_NOT_DONE_CLASS;
    renderTodoList(list);
}