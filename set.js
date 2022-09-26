//new Set(iterable)
//set.add(value)
//set.has(value)
//set.delete(value)
//set.clear()
//set.size

//new Set(iterable - array) - can be used to create a set by passing an array of values
let newSet = new Set(['apple', 'oranges', 'banana']);
console.log(newSet); // Output: Set(3) { 'apple', 'oranges', 'banana' }

//.add() can be used to add new values to the set
newSet.add('mango');
console.log(newSet);

//.has(value) - can be used to check for the existence of a value. Returns a boolean
console.log(newSet.has('apple')); //will return true
console.log(newSet.has('guava')); //will return false

//.delete() - can be used to delete a value from the set
newSet.delete('banana'); //Will delete the value 'banana' from the set
console.log(newSet);

//.size - returns the size of the set
console.log(newSet.size); //Will return 3

//.clear() - can be used to empty the entire set
newSet.clear(); 
console.log(newSet.size); //Will return 0

//------------------------------------------------------------------------------
//Iterables in Sets

//creating a set
let fruits = new Set(['apple', 'banana', 'mango']);

//.keys()
for(let key of fruits.keys()) {
    console.log(key);
}

//.values()
for(let value of fruits.values()) {
    console.log(value); 
} //same as the .keys()

for(let entry of fruits.entries()) {
    console.log(entry);
} //returns a [value, value] pair

//using the forEach built-in method
fruits.forEach((value, valueAgain, Set) => {
    console.log(`${value}, ${valueAgain}`);
}) 

//using the for...of loop
for(let fruit of fruits) {
    console.log(fruit);
}


