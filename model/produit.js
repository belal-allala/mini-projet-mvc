class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

const productList = [];

function addProduct(product) {
    productList.push(product);
}

function removeProduct(index) {
    productList.splice(index, 1);
}

function getProducts() {
    return productList;
}

export { Product, addProduct, removeProduct, getProducts };
