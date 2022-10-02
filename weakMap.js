let weakMap = new WeakMap();

let user = { name: "Nikhil" };

weakMap.set(user, "Okay"); //associating the key with a value using the .set() method

console.log(weakMap.get(user)); //getting the value associated with the key using the .get() method

console.log(weakMap.has(user)); // Checking if the weakMap contains the key or not using 
//.has() method

weakMap.delete(user); //Deleting the key-value pair
console.log(weakMap.has(user)); //This would now return false

//Setting reference to the object as null would be another way to remove the key-value pair in 
//WeakMaps

//Let us look at an example
let weakMap2 = new WeakMap();

let obj = { name: "John Connors" };

weakMap2.set(obj, "Leader of the Resistance team against Terminators.");

console.log(weakMap2.has(obj)); //This would return true

obj = null;

console.log(weakMap2.has(obj)); //This would return false