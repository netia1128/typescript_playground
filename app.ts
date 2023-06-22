function add(num1: number , num2: number) {
  return num1 + num2;
}

console.log(add(2, 4));

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