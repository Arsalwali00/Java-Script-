const Name = "Arslan Wali"
let repoCount ="100"

// console.log(Name + repoCount + " Value");  not a good practice to do this

console.log(`My name is ${Name} and my repo count is ${repoCount}`);

const gameName = new String( "Freedom Fighters");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));


console.log(gameName.indexOf("m"));

const newString=gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(1 , -6);

console.log(anotherString);

const stringOne = "   Wail    "
console.log(stringOne);
console.log(stringOne.trim());

const url = "http://arsalwali.com/api/%20WaliShop"

console.log(url.replace('%20',"-"));
