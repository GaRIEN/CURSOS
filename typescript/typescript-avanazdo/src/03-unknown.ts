// Any

let anyVar: any;

anyVar = true;

anyVar = 122;

anyVar = "Hello";

anyVar = undefined;

anyVar = null;

anyVar = {};

let isNew: boolean = anyVar;

// Odiously fail

anyVar.doSomething();

anyVar.toUpperCase();

// Unknown: It forces to check the types unlike any

let unknownVar: unknown;

unknownVar = true;

unknownVar = 122;

unknownVar = "Hello";

unknownVar = undefined;

unknownVar = null;

unknownVar = {};

// let isNewest: boolean = unknownVar; // it fails

if (typeof unknownVar === "boolean") {
  let isNewest: boolean = unknownVar;
}

if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
