type exampleUnionType = number | string

function add(num1: number , num2: number) {
  return num1 + num2;
}

console.log(add(2, 4));

function addAnything(input1: exampleUnionType, input2: exampleUnionType) {
  return `${input1} and ${input2}`;
}

console.log(addAnything(2, 4));
console.log(addAnything("Hello", "World"));

const pet: {
  type: string;
  name: string;
  age: number;
} = {
  type: `cat`,
  name: `Gow`,
  age: 18
}

console.log(pet);

const foods: string[] = [`pickles`, `chips`, `tacos`];

console.log(foods);

enum Role { ADMIN, READ_ONLY, AUTHOR }

console.log(Role.ADMIN);