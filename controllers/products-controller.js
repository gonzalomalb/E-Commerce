import { productServices } from "../services/product-services.js";

const newProduct = (name, price, imgUrl) => {

    const card = document.createElement("div");
    const content = `
    <div>
        <img src="${imgUrl}">
        <h3>${name}</h3>
        <p>$${price}</p>
        <a href="">Ver producto</a>
    </div>
    `;
    card.innerHTML = content;
    card.classList.add("card");
    return card;

}

const products = document.querySelector('[data-product]')

const render = async () => {
    try {
        const productList = await productServices.productList();
        productList.forEach(element => {
            products.appendChild(newProduct(element.name, element.price, element.imgUrl));
        });
    } catch(err) {
        console.log(err);
    }
}

render();