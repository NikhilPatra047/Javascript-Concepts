//new Map()
//map.set(key, value);
//map.get(key)
//map.has(key)
//map.delete(key)
//map.clear
//map.size

//with map we can pass in an array of key-value pairs to initialise a map
let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

//also we can use the .set() method to insert a new key-value pair
map.set('d', 1);
map.set('e', 1);
map.set('f', 1);

//to see the value associate with a key, use the .get() method
console.log(map.get('a'));

//to check for the existence of a key within a map, use the .has() method
console.log(map.has('a')); // will return true
console.log(map.has('z')); //will return false

//to delete a key, use the .delete() method. It deletes the value along with the key
map.delete('e');
console.log(map); //output: {'a' => 1, 'b' => 1, 'c' => 1, 'd' => 1, 'f' => 1}

//to see the size of the map, use the .size() method
console.log(map.size);

//to clear the map, use the .clear() method
map.clear();

console.log(map); //will return an empty map

// ------------------------------------------------------------------------------------------------------------------------------
//Map iterables
// map.keys() 
// map.values()
// map.entries()

//let us use the same map that we created above
let newMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// map.keys() returns an iterable for keys
for(let key of newMap.keys()) {
    console.log(key);
}

// map.values() returns an iterable for values of the keys
for(let value of newMap.values()) {
    console.log(value);
}

// map.entries() returns an iterable for key-value pairs
for(let entry of newMap.entries()) {
    console.log(entry);
}

// ------------------------------------------------------------------------------------------------------------------------------
// converting map into objects and vice-versa
// Object.entries()
// Object.fromEntries()

//let use the same map all over again. We are using the newMap declared above

// Object.fromEntries() - creates an object out of a map
//given an array of key-value pairs, it creates an object out of that 

let obj = Object.fromEntries(newMap.entries()); //.entries() returns an iterable of key-value pairs
//newMap.entries() is the same as [['a', 1], ['b', 2], ['c', 3]]

console.log(obj);

//this can be done without the use of .entries() method as well
let obj2 = Object.fromEntries(newMap);
console.log(obj2);

//Object.entries() - returns an array of key-value pairs

let newMap2 = new Map(Object.entries(obj2));
console.log(newMap2);

