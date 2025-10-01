//String and its Operations
//string in IMMUTABLE in JS , means cant assign twice or modify,
//Whatever Operations performed → new string assigned ,original never changes
// but in C++ can be modify
// three ways to declare string → ' '  , " "  ,`  `
console.log("\n");
let str = `BOSS Ankur`;
console.log(str);
console.log(str[5]);
console.log(str[20]); //out of bound ,undefined behaviour
str[1] = `a`; //immutable
console.log(str);
//str. and see the magic
console.log(str.length); // to get length

console.log(str.toUpperCase()); //converted to uppercase
console.log(str.toLowerCase()); // convert to lowercase

console.log(str.indexOf("nk")); // to find index randon →→ continue substring
console.log(str.indexOf("helo")); // not present means -1,not found
console.log(str.lastIndexOf("S")); // last me jaha rhega same substring uska string
console.log(str.includes("OSS")); //to check if same string is present → true
console.log(str.includes("hell")); // not present →→ false

//Slice Operations
console.log(str.slice(2, 4)); // index value do and ye trim kr dega→ SS
console.log(str.slice(-4)); // negative mark allowed
console.log(str.substring(1, 3)); // negative mark not allowed in this obj

//String Concatenation
let a = "BOSS";
let b = "Ankur";
let c = a + " " + b;
console.log(c); //combines

console.log(a.replace("SS", "AA")); //replace string// replaceAll→ where ever is AA

//WHITESPACE sensitive method → to ignore  spaces
const user = " ANKUR ";
console.log(user.trim()); // removes spaces from START and END  to avoid errors
//also there are trimStart , trimEnd

//Spilliting string into array
const names = "Rohit,Mohit,Suraj,Ankur,Balajee";
console.log(names.split(","));// jaha bhi comma rhega waha se spilit and cnvrt array

