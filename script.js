import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deletIcon.js';

const btn = document.querySelector("[data-form-btn]");


const creatTask = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    const titleTask = document.createElement("span");
    const taskContent = document.createElement("div");
    task.classList.add("card");
    titleTask.classList.add("task");
    input.value = '';
    list.appendChild(task);
    task.appendChild(taskContent);
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(deleteIcon());

    titleTask.innerText = value;
};

// arrow functions o funciones anonimas
btn.addEventListener("click", creatTask);

