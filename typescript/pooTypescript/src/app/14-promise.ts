import { helpHttp } from "./services/http.service.js";
import { Product } from "./interface/product.interface.js";
import { httpResponseError } from "./interface/interface.js";

// Estáticos
const API_URL = "https://api.escuelajs.co/api/v1/products";

const api = helpHttp();

function getData() {
  api
    .get(API_URL)
    .then((res: Product | httpResponseError ) => {
      if ("err" in res) {
        console.error("Error:", res.statusText || "Unknown error");
      } else {
        console.log("Data:", res);
      }
    })
    .catch((err) => {
      console.error("Error en la solicitud:", err);
    });
}

getData();
