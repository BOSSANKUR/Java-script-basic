//An object in JavaScript is a collection of key-value pairs (also called properties).
//It’s like a real-world object — it has properties (data) and methods (functions).
//CRUD operation→ Create , Read,Update ,Delete
//Creating object
//--behind the scene , Keys are stored as string →"name","age","balance".

const User = {
  name: "Ankur",
  age: 20,
  balance: "200 cr",
  "home adderess": "bihar",
  //function inside object , dont use fucntion keyword
  print() {
    console.log(4); //this refers to the current Object
  },
};
console.log(User);
User.print(); //------------printing data using function inside obj
console.log(User.age); //------accessing single value
User.aadharNo = 30202234; //-------Inserting  new Property
User.age = 25; //-----------------Updating value
delete User.balance; //----------Deleting existing , used DELETE kyword
console.log(User);
console.log(typeof User.age); //---to check type

//accessing value Like ARRAy
console.log("\n ==========Accessing value like an array ==========");
console.log(User["name"]);
console.log(User["age"]);
console.log(User["balance"]); //---------deleted , so showing undefined
console.log(User["aadharNo"]);

console.log(User["home adderess"]); //---spacing in key → dont use .notation , use aray style printing

//Copy By reference
console.log("\n ===========Copy By Reference Concept ============");
const user1 = {
  name: "Joseph",
  course: "BCA",
  age: 25,
  balance: 5000,
};
const user2 = user1; //Points to the same reference ,user1
console.log(user1);
console.log(user2);
user2.name = "Virat"; //----changes occurs on both , bcoz pass by ref
user2.balance = 1000;
console.log(user1);
console.log(user2);
//To show Keys , JS creates an array then store all values as STRING
console.log("\n=========Keys And Values And Both Concept ==========");
console.log(Object.keys(user1)); //-----Keys show , used # Object function
console.log(Object.values(user1)); //----Value show
console.log(Object.entries(user1)); //----shows both KEYS & values

//---For in Loop to print values ---------
console.log("\n=========== FOR in LOOP concept ============= ");
for (let keys in user1) {
  console.log("Keys =", keys, "  ,values =", user1[keys]); //---prints only keys , both keys and values
}

//--Destructuring Concept --------
//-----basically we took the value out and stored in other variable --
console.log("\n =========== Object De-Structuring  Concept ===========");
const userr = {
  name: "Hero",
  age: 20,
  balance: 3000,
  salary: 20000,
};
//------long Hand of Destructuring ------
const name = userr.name;
const age = userr.age;

console.log("Long hand →", name, age);
//--------------short hand of Destructuring ----------------
const { salary, balance } = userr; //----also we can change variable name like →
// salary:money,balance:amount
console.log("short hand →", salary, balance);

console.log("\n ======Array Destructuring concept =======");
const arr = [10, 20, 30, 40, 50, 60, 70];
//short hand Destructuring
const [i, j, k, g] = arr; //---starts from index 0, can use any naming
//long hand Destructuring
console.log("short hand→", i, j, k, g);
const h = arr[0];
const s = arr[6];
console.log("Long hand→", h, s);

//------------------For OF loop is recommended --------------
//- it is recommended , it can be done after converting Objects in to Arrays
console.log("\n============ For OF Loop =========");
//  using Object.entries(user) → converts obj into array as we know
const TempArray = Object.entries(userr); //--.keys, .values , .entries
for (let keys of TempArray) {
  //--alsa can --→ for(let keys of Object.entries(userr)){
  console.log(keys);
}
//----direct values printing without []---------
for (let [keys, values] of Object.entries(userr)) {
  console.log(keys, values);
}

//======NESTED OBJECT===================
console.log("\n=========Nested Objejct==========");
const obj = {
  name: "Stark",
  age: "21",
  account: 213243,
  insider_obj: {
    balance: "1M$",
    city: "Munger",
    pinCode: 811214,
  },
};
console.log(obj); //--full print
console.log(obj.insider_obj); //---nested obj print
console.log(obj.insider_obj.city); //---accessing single value of nested obj
/*const obj2 = obj;  //--points same
obj2.name = "ankur";
console.log(obj);*/
//-----independent copy of object ------
console.log("\n ---shallow copy -------");
const obj2 = { ...obj }; //--now 2 copy creates
obj2.name = "Iron Man";
console.log(obj2);

/*obj2.insider_obj.city="patna";
 console.log(obj);*/ //--------issue occur bcoz spread operator... make separate copy on one level not works on nested object
//=====structuredClone============ creates copy also for nested Objects
console.log("\n ----- Deep Copy -----");
const obj3 = structuredClone(obj); //---creates copy of nested loop also
obj3.insider_obj.city = "New York";
console.log(obj3);

//=============kays as 0,1,2,3, and accessing mode======
console.log("\n====keys as number declaration ======");
const object = {
  0: "THOR",
  1: 432343,
  2: "America",
};
console.log("---array like accessing without using . oprtr");
console.log(object[0]);
console.log(object[1]);
console.log(object[2]);

