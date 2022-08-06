import { productServices } from "../services/product-services.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const category = document.querySelector('[data-category]').value;
    const description = document.querySelector('[data-description]').value;

    productServices.createProduct(url, name, price, description).then(response => {
        window.location.href = "/index.html";
        alert("El producto fue agregado con exito");

        console.log(response);

    }).catch(err => {
        console.log(err);
    });
});