let date = new Date();
console.log(date);

//accessing the date components
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(date.getDay());

//setting the date components
date.setFullYear(2022);
date.setMonth(0);
date.setDate(2);
date.setHours(12);
date.setMinutes(23);
date.setSeconds(22);
date.setMilliseconds(222);

console.log(date);

let newDate = new Date(2023, 0, 12, 0, 0, 0, 0); //providing the arguments
console.log(newDate);

//converting date to number
console.log(+date);

let ms = Date.now();
console.log(ms);

//Date.parse(str)
let parseDate = Date.parse('2022-01-21T00:00:00.000');
console.log(parseDate);


