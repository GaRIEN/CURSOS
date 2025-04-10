import { ProducHttppService } from './services/producthttp.service';
(async()=>{

    const productService= new ProducHttppService();
    const products= await productService.getAll();
    console.log(products.length);
    console.log(products.map(item=> item.id));

})()