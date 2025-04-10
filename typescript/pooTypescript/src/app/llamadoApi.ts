import { ProducHttppService } from "./services/producthttp.service";
(async () => {
  const productService = new ProducHttppService();
  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map((item) => item.id));
  console.log('error');

  await productService.update(1, {
    title: "Camiseta 23",
    price: 200,
    description: "Camiseta de algodon",
    categoryId: 1,
    images: ["https://placeimg.com/640asasasas/480/any"],
  });

  

  const product = await productService.findOne(1);
  console.log(product);
})();
