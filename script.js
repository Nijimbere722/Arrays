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

// Exercise 6: Checking Arrays integrity

let 
userAges = [18,24,33,16,40];
// a
let under18= userAges.some(age => age < 18);
console.log(under18);
// b
let allAdults = userAges.every(age => age >= 18);
console.log(allAdults);

// c
let multipleOf5 = userAges.some(age => age % 5 === 0);
console.log("Is any age multiple of 5?", multipleOf5);

// Section C: Transformation and Reo-rdering
// Sorting and Reversing Arrays
let dataPoints = [42, 10, 500, 2, 77];
// a
let ascending = [...dataPoints].sort((a, b) => a - b);
console.log("Ascending:", ascending);
//b
let descending = [...dataPoints].sort((a, b) => b - a);
console.log("Descending:", descending);
// c
let reversedOriginal = dataPoints.slice().reverse();
console.log("Reversed Original:", reversedOriginal);

// EExercise 8: Concatenation, Joining, and Slicing
let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let sentenceParts = ["Hello", "world", "this", "is", "great"];
// a
let combinedArray = arr1.concat(arr2);
console.log("Combined Array:", combinedArray);
// b
let sentence = sentenceParts.join(" ");
console.log("Joined Sentence:", sentence);
//c
let middleThree = sentenceParts.slice(1, 4);
console.log("Middle Three Elements:", middleThree);

// Exercise 9": Flattening Arrays(Flat)
let nestedArrays = [1, [2, 3], [4, [5, 6]], 7];
// a
let flattenedOnce = nestedArrays.flat();
console.log("Flattened Once:", flattenedOnce);
// b
let fullyFlattened = nestedArrays.flat(Infinity);
console.log("Fully Flattened:", fullyFlattened);

// Section D: Functional Programming 
// Exercise 10: Mapping Data
let priceUSD = [ 10.50, 20.00, 5.25];
let exchangeRate = 1.3

// a
let pricesLocal = priceUSD.map(price => price * exchangeRate);
console.log("Prices in Local Currency:", pricesLocal);

// b
let priceStrings = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log("Price Strings:", priceStrings);

// Exercise 11: Filtering Data
let testScores= [45,78,92,30,65,88];
//a
let passingScores = testScores.filter(score => score >= 70);
console.log("Passing Scores:", passingScores);

// b
let total = testScores.reduce((sum, score) => sum + score, 0);
let average = total / testScores.length;
console.log("Average Score:", average);

let belowAverage = testScores.filter(score => score < average);
console.log("Below Average Scores:", belowAverage);

// Exercise 12: Aggregating Data(Reduce)
let pricesUSD = [10.50, 20.00, 5.25];

// a
let totalCost = pricesUSD.reduce((sum, price) => sum + price, 0);
console.log("Total cost:", totalCost);
// b
let maxPrice = pricesUSD.reduce((max, price) => {
  if (price > max) {
    return price;
  } else {
    return max;
  }
});
console.log("Maximum price:", maxPrice);

// c
let countAbove15 = pricesUSD.reduce((count, price) => {
  if (price > 15) {
    return count + 1;
  } else {
    return count;
  }
}, 0);

console.log("Prices greater than $15:", countAbove15);

// Section E : Objects Inside Arrays
// Exercise 13: Accessing Object Properties in Arrays

users = [{name: "Zoe", age: 30}, 
         {name: "Adam", age: 25}, 
        {name: "Charlie", age: 30}];
//a
const sortByAge = users.slice().sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", sortByAge);

// b
users.sort((a, b) => {
  if (a.age === b.age) {
    return a.name.localeCompare(b.name); // sort by name
  }
  return a.age - b.age; // sort by age
});

console.log(users);

// Exercise 14: Mapping and Filtering Objects in Arrays
const users = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];
// a
const names = users.map(user => user.name);
console.log(names);
// b
const olderUsers = users.filter(user => user.age > 28);
console.log(olderUsers);

// Section  F: Multidimensional Arrays
// Exercise 15: Creating and Accessing a Matrix
// a
const gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
// b
gameBoard[1][1] = 1;
console.log(gameBoard);
// c
console.log(gameBoard[0][2]);

// Exercise 16: Looping Through a Matrix
const gameBoard = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];
// a
for (let i = 0; i < gameBoard.length; i++) {
  for (let j = 0; j < gameBoard[i].length; j++) {
    console.log(gameBoard[i][j]);
  }
}
// b
let sum = 0;
for (let i = 0; i < gameBoard.length; i++) {
  for (let j = 0; j < gameBoard[i].length; j++) {
    sum += gameBoard[i][j];
  }
}
console.log("Sum of all elements:", sum);











































 

