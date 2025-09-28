document.addEventListener("DOMContentLoaded", () => {
  const productController = new ProductController();
  productController.init();
});

class ProductController {
  constructor() {
    this.logicService = new LogicService();
    this.ui = new UI();
  }
  async init() {
    const dataform = await this.ui.listenerSaveForm();
    console.log(dataform);
    this.ui.generateCardProduct(dataform);
  }
}

class LogicService {}

class UI {
  listenerSaveForm() {
    return new Promise((resolve) => {
      document
        .getElementById("Form-NewProduct")
        .addEventListener("submit", (e) => {
          e.preventDefault();
          const product = document.getElementById("product").value;
          const price = document.getElementById("price").value;
          const anio = document.getElementById("anio").value;
          e.target.reset();
          resolve({ product, price, anio });
        });
    });
  }
  generateCardProduct(product) {
    const containProducts = document.getElementById("product-list");
    const card = document.createElement("div");
    card.className = "card mb-3 shadow-sm";
    card.innerHTML = `
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <h5 class="card-title text-primary mb-1">${product.product}</h5>
        <p class="card-text mb-0"><strong>Precio:</strong> S/${product.price}</p>
        <p class="card-text"><strong>Año:</strong> ${product.anio}</p>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-sm btn-warning">Editar</button>
        <button class="btn btn-sm btn-danger">Eliminar</button>
      </div>
    </div>
  `;

    containProducts.prepend(card);
  }
  deleteProduct() {}

  showMessage() {}
}
