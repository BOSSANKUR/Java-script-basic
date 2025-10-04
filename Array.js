// =======================
// JavaScript Arrays Cheat Sheet
// =======================

// ---------- 1. Basic Array ----------
// Ordered collection of values with numeric indices
let Marks = [50, 45, 21, 45, 21, 65];
console.log(Marks); // Print array
console.log(typeof Marks); // "object"
console.log(Marks.length); // Array size

// ---------- 2. Heterogeneous Array ----------
// Arrays can store different types
let Mix = [323, "BOSS", 4343.4, true, false];
console.log(Mix);

// Accessing elements by index
console.log(Mix[0], Mix[1], Mix[2], Mix[3], Mix[4]);

// Modifying array values (arrays are mutable)
Mix[0] = 23;
console.log(Mix);

// ---------- 3. Push & Pop ----------
// push: add at end | pop: remove from end
Mix.push(500, "Ankur");
console.log(Mix);
Mix.pop();
console.log(Mix);

// ---------- 4. Unshift & Shift ----------
// unshift: add at beginning | shift: remove from beginning
Mix.unshift(3443);
console.log(Mix);
Mix.shift();
console.log(Mix);

// ---------- 5. Array Iteration ----------
// Classic for loop
let arr = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of loop (simpler)
for (let num of arr) {
  console.log(num);
}

// ---------- 6. Copying Arrays ----------
// Copy by reference (changes affect original)
let arr1 = [2, 3, 4, 5, 6, 7, 8];
let arr2 = arr1;
arr2.push(32);
console.log(arr1); // arr1 also changed

// ---------- 7. Const Array ----------
// Array itself cannot be reassigned, but elements can change
const arrc = [3, 43, 5, 3, 44];
arrc[1] = [43, 34, 55, 33];
console.log(arrc);

// ---------- 8. Slice vs Splice ----------
// slice: returns a portion (non-destructive)
// splice: removes elements (destructive)
let array = [34, 55, 32, 43, 24, 42];
console.log(array.slice(2, 4)); // [32, 43]
console.log(array.splice(2, 4)); // [32, 43, 24, 42] and original array changed

// ---------- 9. Concatenation / Merge ----------
// concat method
const Array1 = [10, 20, "Ankur", true];
const Array2 = [42, 55, "Boss", false];
const Array4 = [200, 500, true];
const Array3 = Array1.concat(Array2, Array4);
console.log(Array3);

// Using spread operator (modern & cleaner)
const Array5 = [...Array1, ...Array2, ...Array4];
console.log(Array5);

// Nesting arrays
const Array6 = [Array1, Array2];
console.log(Array6);

// ---------- 10. Join ----------
// Convert array to string
const arr6 = [10, 20, 30];
console.log(arr6.join(" → ")); // "10 → 20 → 30"

// ---------- 11. Searching ----------
// indexOf: first occurrence
// lastIndexOf: last occurrence
// includes: true/false if present
const Array8 = [11, 22, 33, 44, 55, 66, 77, 88, 22];
console.log(Array8.indexOf(44)); // 3
console.log(Array8.lastIndexOf(22)); // 8
console.log(Array8.includes(33)); // true

// ---------- 12. Sorting ----------
// Default sort: converts to string (dictionary order)
const Names = ["Bob", "Ankur", "Rohit", "Joseph", "Boss"];
Names.sort(); // Ascending (A→Z)
Names.reverse(); // Descending (Z→A)
console.log(Names);

// Numeric sort
const ArraY = [100, 32, 53, 1, 50];
ArraY.sort((a, b) => a - b); // ascending
console.log(ArraY);

// ---------- 13. Flattening ----------
// Flatten nested arrays
const Array9 = [10, 20, [12, 14, [21, 32, 45, 53], 15, 64, 62], 40, 50];
console.log("Original:", Array9);
const Array10 = Array9.flat(Infinity); // flatten completely
console.log("Flattened:", Array10);

// ---------- 14. Deleting Elements ----------
// Using splice (recommended)
let arr9 = [10, 20, 30, 40, 50];
arr9.splice(2, 1); // remove index 2
console.log(arr9); // [10, 20, 40, 50]
