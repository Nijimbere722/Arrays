const productCategories = ["Books", "Electronics","clothing" , "Home & Kitchen", "Toys & Games"];
// a
console.log(ProductCategories[0]);

// b
console.log(productCategories[productCategories.length -1]);
// c
console.log(productCategories.length);
// d
productCategories[1]= "Pen"
// e
console.log(productCategories);


// Exercise 2: Push, Pop, Shift, Unshift, Splice
let inventory = [10,20,30]

//a
inventory.push(40);
console.log(inventory);
//b

inventory.pop();
console.log(inventory);
//c
inventory.unshift(0);
console.log(inventory);
//d
inventory.shift();
console.log(inventory);
//e
inventory.splice(1,1,25,35);
console.log(inventory);

// Exercise 3: Shallow copying  of Arrays abd the reference Trap
//a

const originalScores = [90,85,78];

// b
 const referenceCopy = originalScores;
 console.log(referenceCopy);
// c
referenceCopy[0] = 100;
console.log("originalScores:", originalScores);
onsole.log("referenceCopy:", referenceCopy);
// d
const spreadCopy = [...originalScores];
// e
spreadCopy[2] = 50;
console.log("originalScores:", originalScores);
console.log("spreadCopy:", spreadCopy);

// section 3: Searching and checking
// Exercise 4
const studentNames= ["Alice", "Bob", "Charlie", "Alice", "David"];
// a
console.log(studentNames.indexOf("Alice"));
// b
console.log(studentNames.lastIndexOf("Alice"));
// c
console.log(studentNames.includes("Charlie"));
// d
console.log(studentNames.includes("Eve"));

// Exercise 5: Advanced Searching with find and findIndex
const products = [
    {id: 1, name: "Laptop", price: 999},
    {id:2, name: "Smartphone", price: 499},
    {id:3,name: "Tablet", price: 299},
    {id:4,name: "Headphones", price: 199}
];
// a
 let foundProduct = products.find(product => product.id===2);
 console.log(foundProduct);
// b
let foundIndex = products.findIndex(product => product.price > 1000);
console.log(foundIndex);











 

