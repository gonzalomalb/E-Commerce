const productList = () => fetch("http://localhost:3000/productos").then(response => response.json());

const createProduct = (imgUrl, name, price, category, description) => {
    return fetch("http://localhost:3000/productos", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imgUrl,
            name,
            price,
            category,
            description
        })
    })
    .then( response => {
        if(response.ok){
            return response.body
        }
        throw new Error('No fue posible crear el producto');
    })
}

export const productServices = {
    productList,
    createProduct
}