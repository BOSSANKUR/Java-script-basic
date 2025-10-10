//=====syntax and initialization=======
//-----function keyword is uded ---
function greet() {
  console.log("Hello Boss Ankur");
  return 2 + 2;
}
greet();
//-----console.log(greet());

// adding two number --------, no need to define let or .....
function AddTwoNumber(Num1, Num2) /*→Parameter*/ {
  const sum = Num1 + Num2;
  console.log("\nSum  is ", sum);
}
//---multiple calling-----
AddTwoNumber(20, 40); //---argument--
AddTwoNumber(2, 40);
AddTwoNumber(123, 40);

//===============Default value 0 concept =======
console.log("\n=====Default 0 for Multiple Argument===");
function addNumbers(num1, num2, num3 = 0, num4 = 0) {
  sum = num1 + num2 + num3 + num4;
  console.log(sum);
}
addNumbers(2, 5);
addNumbers(23, 43, 33);
addNumbers(23, 56, 54, 65);

//=====Rest Operator → (...name)=====
console.log("\n ===Rest Operator ===");
function Addnumbers(...num) {
  let sum = 0;
  for (let n of num) {
    sum = sum + n;
  }
  console.log(sum);
}
Addnumbers(2, 3);
Addnumbers(23, 43);
Addnumbers(26, 67, 65);
Addnumbers(45, 56, 56, 99);
Addnumbers(2, 3, 54, 67, 98, 76, 44);

//==========Function as Variable/Expression =======
console.log("\n=====Function As Variable ======");
const AddNumbers = function (num1, num2) {
  //let sum =num1+num2;
  //console.log(sum);
  return num1 + num2;
};
console.log(AddNumbers(23, 43));

//============Arrow Function======
console.log("\n=====Arrow Function=====");
const adding = (num1, num2) => {
  return num1 + num2;
};
console.log(adding(43, 57));
//-if we just returning something then arrow shorthand----
const ADDnumber = (num1, num2) => num1 + num2;
console.log(ADDnumber(30, 34));

//======arrow => magic =====
//--if only one parameter like calculating square then  see
const squareOfNumber = (num) => num * num;
console.log("square of Number →", squareOfNumber(5));

//=====object inside function ========
console.log("\n====object inside function =====");
const objfun = () => ({
  //-adding =>( ) tells that valuw will be return
  name: "Ankur Boss",
  age: 21,
  state: "Bihar",
});
console.log(objfun());

//===IIFE → imidiately invoked function expression
console.log("\n==IIFE==");
(function grtteing() {
  console.log("HEllo BOSS Ankur ");
})(); //---used two ()()

