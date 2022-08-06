const userList = () => fetch("http://localhost:3000/usuario").then(response => response.json());

const createUser = (name,password) => {
    return fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
            "Content-type" : "application/json",
        },
        body: JSON.stringify({name,password})
    });
}

export const userService = {
    userList,
    createUser
}