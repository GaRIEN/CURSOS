export const createProduct = (
  id: string | number,
  isNew?: boolean,
  //El operador opcional se define con ? y typescript sugiere que estos elementos opcionales se agreguen commo ultimo parametro en la definici0on de nuestra variable
  stock?: number
) => {
  return {
    id,
    //Esta es la forma en la que agregamos un valor por defecto en caso de no recibirlo
    // stock: stock || 10,
    // isNew: isNew || true,
    //asignacion de valores por defecto con nullish coalising
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct(1, true, 12);

console.log(p1);

const p2 = createProduct(1);

console.log(p2);
//El log del la variable retorna undifinend en caso de no asignar valores por defecto
//{ id: 1, stock: undefined, isNew: true }
//Para definir una variable y que no retorne como undifined hay fomar de asignar valores popr defecto en caso de que no sen enviados

// el operador || tiene un problema y es que cuando uno de los sigueitnes datos es enviado da un valor por defecto de false.
// 0 = false
// '' = false
// false = false
//En este caso para evitar los problemas de reasignacion por defecto utilizamos el operador de nullish coalising que es ??
const p3 = createProduct(1, false, 0);

console.log(p3);
