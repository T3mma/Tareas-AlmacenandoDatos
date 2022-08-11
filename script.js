const btn = document.querySelector("[data-form-btn]");


const creatTask = (e) => {
    e.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

console.log(btn);

// arrow functions o funciones anonimas
btn.addEventListener("click", creatTask);

