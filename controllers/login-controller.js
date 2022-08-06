import { userService } from "../services/user-services.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector('[data-name]').value;
    const password = document.querySelector('[data-password]').value;

    userService.createUser(name,password).then(() => {
        window.location.href = "/index.html";
    }).catch(err => {
        console.log(err);
    });
});