import { ProductMemoryService } from "./services/product.service.js";

const productService = new ProductMemoryService();
productService.create({
  title: "Product 5",
  price: 100,
  description: "Description 5",
  categoryId: 1,
  images: ["image1.jpg", "image2.jpg"],
  creationAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

// const products = productService.getAll();
// const productId = products[0].id;

// productService.Update(productId, {
//   title: "Updated Product",
//   price: 150,
//   description: "Updated Description",
//   categoryId: 2,
// });

