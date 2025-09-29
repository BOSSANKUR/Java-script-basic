let a=10;
let b=5;

//Arithematic Operators
//---------------------------
console.log(a+b);  //add
console.log(a-b);  //subtract
console.log(a*b);   //multiply
console.log(a/b);   //divide
console.log(a%b);     //ramainder
//Square / Cube **.***
console.log(a**2);  //Exponential Operator gives square
console.log(a**3); //Cube

//Relational Operator
console.log(a==b);
console.log(a<=b);
console.log(a>=b);
console.log(a!=b);
console.log("\n");

// ----------- 6. Quick Tips -----------
// Number()   → general conversion to number
// parseInt() → integer parsing from string
// parseFloat() → float parsing from string
// String()   → general conversion to string
// Boolean()  → convert to true/false
// !!value    → shorthand for Boolean conversion
// Array.from() → convert iterable/string to array
// Object()   → wrap primitive into object

//Converting String to Number
//--------------------------------
let str="10";
let num=Number(str);// prebuilt global constructor used to convert value into number
console.log(typeof num);
let nm=" Ankur";
let ak=Number(nm);
console.log(ak);//give  NaN=not a  Numebr
console.log(typeof ak);
//NuMber to String
let N=20;
let S=String(N);
console.log(S);
console.log(typeof S);

//Strict Equallity Check Operator
//---------------------------------
let n=20;
let z="20";
console.log(n==z);// converted string into number internally BY JS
console.log(n===z);//it also checks the data type like : Number != string , gives false

//BOOL conversion into number
//----------------------------
let bo=true;
console.log(Number(bo));// gives one
console.log(Number(false));

//NULL and UNDEFINED conversion
//----------------------------------
console.log("\n");
console.log(Number(null));//  Null is 0 in number
console.log(Number(undefined));//undefined NaN

//Some Weird Behaviour
//---------------------
console.log("\n");
let d=0.1;
let v=0.2;
let m=d+v;
console.log(m)
console.log(m==0.3);//bcoz binary conversion is looped for 0.2


//Decimal Number as string To handle Operations
//----------------------------------------------
console.log("\n");
let str1="0.1";
let str2="0.2";
let ADD=str1+str2;// here it Concatenates so output giver 0.10.2
console.log(ADD);
//to add both as numbers


let AddUsingNumber = Number(str1) + Number(str2);
console.log(AddUsingNumber.toFixed(1)); // "0.30" for precision used function

//-------------------------------//
//Some Faltu Rules
//-------------------------------//

//1. NULL is loosely equal to Undefined only
console.log(null==undefined);
console.log("\n");
//2. NULL converts into Number when we use relational Operator(null→number)
console.log(null>=0);
console.log(null<=0);
console.log(null>0);
console.log(null<0);
//string Comparison
console.log( "Mohit">"Rohit");//compares ASCII values of every letter


