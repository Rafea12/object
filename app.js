// Step 1: Create a simple object with three items
let myObject = {
    item1: "Apple",
    item2: "Banana",
    item3: "Orange",
};

// Step 2: Using the for in loop to get properties' names and values from the object
console.log("Object properties and values:");
for (let property in myObject) {
    console.log(`${property}: ${myObject[property]}`);
}

// Step 3: Create an array containing the same three items
let myArray = ["Apple", "Banana", "Orange"];

// Using the for of loop to output the values from the array
console.log("Array values:");
for (let value of myArray) {
    console.log(value);
}