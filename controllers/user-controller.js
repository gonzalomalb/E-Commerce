import { userService } from "../services/user-services.js";

const btnLogin = document.querySelector("[data-login]");
const btnAdmin = document.querySelector("[data-admin]");

const render = async () => {
    try {
        const userList = await userService.userList();
        userList.forEach(element => {
            if(!element.name.length == 0){
                btnLogin.classList.replace("login", "hide");
                btnAdmin.classList.replace("hide", "admin");
            }
        })
    } catch(error) {
        console.log(error);
    }
}

render();

