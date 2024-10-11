function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task === '') return;

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', function (e) {
        e.stopPropagation();
        removeTask(this);
    });
    taskList.appendChild(li);

    saveTask(task);

    taskInput.value = '';
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(li) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(li);

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task!== li.textContent);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

document.addEventListener('DOMContentLoaded', function () {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function (e) {
            e.stopPropagation();
            removeTask(this);
        });
        taskList.appendChild(li);
    });
});
