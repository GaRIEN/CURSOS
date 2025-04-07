const withoutEnd = () => {
  while (true) {
    console.log("Never stop to learning...");
  }
};

// TypeScript automatically types the fail function as `never`

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === "string") {
    return "It's a string";

    // This how we can validate the array type
  } else if (Array.isArray(input)) {
    return "It's an array";
  }

  return fail("not match");
};

console.log(example("Hello"));

console.log(example([1, 0, 1, 0]));

console.log(example(1223));

console.log(example("Hello, after the fail"));
