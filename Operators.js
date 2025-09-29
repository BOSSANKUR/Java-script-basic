let a=10;
let b=5;

//Arithematic Operators
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


//Converting String to Number
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
let n=20;
let z="20";
console.log(n==z);// converted string into number internally BY JS
console.log(n===z);//it also checks the data type like : Number != string , gives false

//BOOL conversion into number


