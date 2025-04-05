"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const fetchData = (url) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
  });
let button = document.querySelector(".btnInfo");
let paragraph = document.querySelector(".info");
button.addEventListener("click", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetchData(
      "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json"
    );
    paragraph.textContent = JSON.stringify(data);
  })
);
