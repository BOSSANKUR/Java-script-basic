//Command to show date and time//many more varous obj to fetch time
const now = new Date();
console.log("UTC → Universal Time Coordinates \n", now);

console.log("\n");
console.log("Indian Time Zone \n", now.toString()); //Indian TIme/current Time
console.log(typeof now);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCSeconds());
console.log(now.getMonth()); // MONTHS starts with 0 based indexing
console.log(now.getFullYear());
//many more

//--------------------------------------------------
//Another Way to show date
//year,month,date,hour,minute,second,milisecond
const present = new Date(2025, 10, 2, 2, 20, 12, 125);
console.log(present);

//-------------------------------------------
//ANother way to create
console.log();
console.log(Date());
