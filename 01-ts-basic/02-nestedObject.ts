/**
 * Nested Objects & Types
 */

const person: {
  name: string;
  age: number;
} = {
  name: "daji",
  age: 5,
};

console.log(person.name);

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A greate Carpet",
  },
};
