const ps = require('prompt-sync');
const prompt = ps();

//
const arr = ["John", "Smith"];
let [firstName, lastName] = arr;
console.log(firstName);
console.log(lastName);
console.log(`--------------------------`);

//
let string = "John Smith";
let [ first, last ] = string.split(" "); //Splits the string by the given parameter and generates an array of remaining elements
console.log(first);
console.log(last);
console.log(`--------------------------`);

//
let user = {};

[user.name, user.surname] = "John Smith".split(' ');

console.log(user.name);
console.log(user.surname);
console.log(user);
console.log(`--------------------------`);

//
let map = new Map();
map.set("name", "John");
map.set("age", "30");

for(let [key, value] of map) {
    console.log(`${key}, ${value}`);
}
console.log(`--------------------------`);

// Default values while destructuring
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius", "Caesar"];
console.log(name);
console.log(surname); //prompt will be initiated for this as it has a missing value on the right
console.log(`--------------------------`);

//Object Destructuring
// Example of Object Destructuring

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(`--------------------------`);

// Providing alternative names for the variables in Objects
let optionsCopy = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title: t, width: w, height: h} = optionsCopy;
console.log(t);
console.log(w);
console.log(h);
console.log(`--------------------------`);

//Default values in Objects
let userData = {
    name: "Nikhil",
    surname: "Patra",
    age: 22
};

let {name: n, surname: s, age: a, gender: g = "M"} = userData;
console.log(n); //name
console.log(s); //surname
console.log(a); //22
console.log(g); //Default value will be used here
console.log(`--------------------------`);

//Rest parameter ... in Objects
let {gender: sex = "M", ...rest} = userData; //Using the rest parameter, we are destructuring the remaining elements
console.log(sex);
console.log(rest.name);
console.log(rest.surname);
console.log(rest.age);
console.log(`--------------------------`);

//Nested Destructuring 
// If an object, or an array contains other nested object or arrays, then it can be destructured using other complex
// patterns 

let foodData = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["cake", "donut"],
    extra: true
};

let {size: {width: wide, height: high}, items: [item1, item2], title: heading = "menu", extra: ex} = foodData;

console.log(wide);
console.log(high);
console.log(item1);
console.log(item2);
console.log(heading);
console.log(ex);
console.log(`--------------------------`);

//Smart Function Parameters
// we can destructure an object or an array passed as a parameter to a function.

function showMenu({size: {width: w, height: h}, items: [item1, item2], extra: ex, gender = "M"}) {
    //the object items are destructured within the parentheses.
    console.log(w);
    console.log(h);
    console.log(item1);
    console.log(item2);
    console.log(ex);
    console.log(gender);
    console.log(`--------------------------`);
};

showMenu(foodData);

//Usage of default values when an object is passed as a parameter to the function 
function show({size: {width = 100, height = 200}, items: [item1 = "Cake", item2 = "Donut"]}) {
    console.log(width);
    console.log(height);
    console.log(item1);
    console.log(item2);
};

show({size: {}, items: []});
