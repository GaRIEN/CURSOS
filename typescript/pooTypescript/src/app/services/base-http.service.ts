// import { Category } from "../interface/category.interface";
// import { Product } from "../interface/product.interface";
// import { helpHttp } from "./http.service";
// const api = helpHttp();
// const API_URL = "https://api.escuelajs.co/api/v1/products";

// export class BaseHttpService<TypeClass> {
//     constructor(private url: string) {}
  
//     async getAll(): Promise<TypeClass[]> {
//       const data = await api.get<TypeClass[]>(this.url);
//       if (!Array.isArray(data)) {
//         throw new Error("Failed to fetch data: Invalid response type");
//       }
//       return data;
//     }
//   }

// const produxctService = new BaseHttpService<Product>(API_URL);
// produxctService.getAll();
