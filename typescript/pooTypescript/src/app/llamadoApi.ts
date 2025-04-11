import { ProducHttppService } from "./services/producthttp.service";
(async () => {
  const productService = new ProducHttppService();
  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map((item) => item.id));


  await productService.update(1, {
    title: "Camiseta 25",
    price: 200,
    description: "Camiseta de algodon",
    categoryId: 1,
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=1234",]
  });

  

  const product = await productService.findOne(1);
  console.log(product);
})();
