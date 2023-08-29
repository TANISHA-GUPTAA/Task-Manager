
const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('category');
const dueDateInput = document.getElementById('dueDate');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    const category = categorySelect.value;
    const dueDate = dueDateInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    const taskTextElement = document.createElement('strong');
    taskTextElement.textContent = taskText;

    const categoryElement = document.createElement('span');
    categoryElement.textContent = `Category: ${category}`;

    const dueDateElement = document.createElement('span');
    dueDateElement.textContent = `Due Date: ${dueDate}`;

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Completed';
    completedButton.addEventListener('click', () => {
        taskItem.classList.add('completed');
        completedTaskList.appendChild(taskItem);
        completedButton.remove();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(document.createElement('br'));
    taskItem.appendChild(categoryElement);
    taskItem.appendChild(document.createElement('br'));
    taskItem.appendChild(dueDateElement);
    taskItem.appendChild(completedButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = '';
    categorySelect.value = 'personal';
    dueDateInput.value = '';
});
