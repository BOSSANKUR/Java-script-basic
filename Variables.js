// ===============================
// VARIABLES (let, const, var)
// ===============================

// 'let' -> value reassign ho sakti hai
let a = 10;
let b = 20;
b = 30;
console.log(a + b); // Output: 40

// 'const' -> fixed value, reassign nahi kar sakte♦
const balance = 2000;
// balance = 3234; ❌ Error: Assignment to constant variable
console.log(balance);

// 'var' (old JS) -> allows multiple declarations (not recommended anymore)


// ===============================
// DATA TYPES in JavaScript
// ===============================
// 2 Types:
// 1. Primitive
// 2. Non-Primitive


// -------------------------------
// 1. PRIMITIVE DATA TYPES
// -------------------------------

// (i) Number → occupies 8 bytes
let nu = 3.14;
let num = 2;
console.log(num, nu); // Output: 2 3.14

// (ii) String
let str = "BOSS ANKUR";
let st = "Hero";
let s = str + st; // String concatenation
console.log(str, st); // Output: BOSS ANKUR Hero
console.log(s);       // Output: BOSS ANKURHero

// (iii) Boolean
let t = true;
let f = false;
console.log(t, f); // Output: true false

// (iv) Undefined → variable declared but not assigned
let ud;
console.log(ud); // Output: undefined

// (v) BigInt → used for very large integers
let bi = 283762873628924n;
console.log(bi); // Output: 283762873628924n

// (vi) Null → intentional empty value
let weather = null;
console.log(weather); // Output: null
console.log(typeof weather);//it says OBJECT instead of NULL

// (vii) Symbol → unique identifier
let mySymbol = Symbol("id");
console.log(mySymbol); // Output: Symbol(id)

console.log(); // just for spacing in output


// -------------------------------
// 2. NON-PRIMITIVE DATA TYPES
// -------------------------------
console.log("   NON PRIMITIVE DATA TYPES   ");

// Array → can store multiple data types (unlike C++ which stores similar type only)
let arr = [101, "Boss", true, 3.14, { course: "BCA" }, [1, 2, 3]];

console.log(arr[0]); // 101   (number)
console.log(arr[1]); // Boss  (string)
console.log(arr[2]); // true  (boolean)
console.log(arr[3]); // 3.14  (number float)
console.log(arr[4]); // {course: "BCA"} (object)
console.log(arr[5]); // [1,2,3] (nested array)
console.log();

//Object→ key-value pair
let obj={
  name:"ANKUR",
   course:"BCA",
   phone:2345678,
}
console.log(obj);


//→ FUNCTION
//can also be stored in VAriable
let fu=function add(){
  console.log("HELLO ");
}
console.log(fu());
fu();
//or
function hi(){
  console.log("HI");
}
hi();

