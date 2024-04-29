"use strict";
// 
// Name Cases: Store a person's name in a variable that print a person's name in lower ,upper and title case
let personName = "RABIA AHMED";
// ---------LowerCase--------------
let lowerCase = personName.toLowerCase();
console.log("\nLowercase:", lowerCase);
// ------------Uppercase------------
let upperCase = personName.toUpperCase();
console.log("\nuppercase ", upperCase);
// ------------Titlecase-------------
let titlecase = personName.replace(/\b\w/g, c => c.toUpperCase());
console.log("\nTitlecase", titlecase);
