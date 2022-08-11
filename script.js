( () => {
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
    taskContent.appendChild(titleTask)
    titleTask.innerText = value;
    const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`

};

const checkComplete = () =>{
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
}


// arrow functions o funciones anonimas
btn.addEventListener("click", creatTask);

// Inmediately invoked function expression  IIFE

const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("far");
  element.classList.toggle("completeIcon");
};
})();