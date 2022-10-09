//Object.keys(), Object.values(), Object.entries()
let user = {
	name: "John",
	surname: "Connors",
	occupation: "Leader of the resistance group",
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//Object.entries(), and Object.fromEntries()
let prices = {
	banana: 1,
	orange: 2,
	mango: 4,
};

let doublePrices = Object.entries(prices);
doublePrices = doublePrices.map((entry) => [entry[0], entry[1] * 2]);
doublePrices = Object.fromEntries(doublePrices);

console.log(doublePrices);

