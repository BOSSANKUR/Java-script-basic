/*“An array in JavaScript is an ordered collection of values. It’s a special type of object with numeric indices, a length property, and built-in methods to manipulate its elements.”*/

let Marks = [50, 45, 21, 45, 21, 65];
console.log(Marks);
console.log(typeof Marks);
console.log(Marks.length, "\n"); // Length of array

//Array is HETROGENEOUs in JavaScript
let Mix = [323, "BOSS", 4343.4, true, false];
console.log(Mix);
console.log(Mix[0]);
console.log(Mix[1]);
console.log(Mix[2]);
console.log(Mix[3]);
console.log(Mix[4]);
Mix[0] = 23; //can change value bcoz object are mutable
console.log(Mix);

//-----------------push.pop-----------------
//Push happen from last end
Mix.push(500);
Mix.push("Ankur");
console.log(Mix);
//pop happens from end
Mix.pop();
console.log(Mix);

//inserting and deleting from beginning
Mix.unshift(3443); //inserting at begin
console.log(Mix);
Mix.shift(); //deleting from begin
console.log(Mix);
//more advised to use push , pop instead of unshift and shift .......

//------------Array Iteration using loop------------/
let arr = [10, 20, 30, 40, 50, 60, 70];
for (let i = 0; i <= arr.length; i++) {
  // used .length for array length
  console.log(arr[i]);
}
console.log();
//--------for off loop---------
for (let num of arr) {
  console.log(num);
}

//----------Copy array------------------///////////////
let arr1 = [2, 3, 4, 5, 6, 7, 8];
let arr2 = arr1;
arr2.push(32); // changes original array bcoz copy by  REFERENCE
console.log(arr1);

/****************when declare arr to CONST ,cant change
 complete array, but can modify indexes */
const arrc = [3, 43, 5, 3, 44];
arrc[1] = [43, 34, 55, 33, 53, 3];
console.log(arrc);

//----slice------
let array = [34, 55, 32, 43, 24, 42];
console.log(array.slice(2, 4)); //prints given sliced indices
console.log(array.splice(2, 4)); //original array change

//-------------CONCATENATION , Merging two Array-----------------
const Array1 = [10, 20, "Ankur", true];
const Array2 = [42, 55, "Boss", false];
const Array4 = [200, 500, true];
const Array3 = Array1.concat(Array2, Array4); //concatenation occurs,3 array added
const Array6 = [Array1, Array2]; //method two to aadd→ bracket added
console.log(Array3);
console.log(Array6);

//----Spread operator .... ---
const Array5 = [...Array1, ...Array2, ...Array4]; //-- most useful , method three →bracket removed
console.log(Array5);

//----------join operation ----------------
//--The join() method is used on arrays to combine all elements into a single string.
const arr6 = [10, 20, 30];
console.log(arr6.join(" → ")); // treates as string(",")("$")

//------------searching in array--------------------
const Array8 = [11, 22, 33, 44, 55, 66, 77, 88, 22];
console.log(Array8.indexOf(44)); //retuns index of element
console.log(Array8.lastIndexOf(22)); //gives last index of duplicate
console.log(Array8.includes(33)); //gives true if present and ,,,,,

//==================SORTING=========================
