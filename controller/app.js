import { Product, addProduct, removeProduct, getProducts } from "../model/produit.js";

const productForm = document.getElementById("product-form");
const productListEl = document.getElementById("product-list");

document.getElementById("ajouter").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;

    if (name && price && description) {
        const product = new Product(name, price, description);
        addProduct(product);
        renderProducts();
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});


function renderProducts() {
    const products = getProducts();
    productListEl.innerHTML = "";
    products.forEach((product, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${product.name}</strong> - ${product.price}
            <p>${product.description}</p>
            <button class="delete-btn">Supprimer</button>
        `;
        productListEl.appendChild(li);
        li.querySelector(".delete-btn").addEventListener("click", () => { deletep(index); });
    });
}

function deletep(index) {
    removeProduct(index);
    renderProducts();
}

renderProducts();
