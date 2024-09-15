const accountId = 1234
let accountEmail= "Arslan@google.com"
var accountPassword= "112233"
accountCity= "Jalalabad"

// accountId=2 This is not allowed to do we cant change const value if this is already decleared \

console.log(accountId)

accountEmail="Wali@google.com"
accountPassowrd="Abc"
accountCity="Jalalabad"
let accountState;

/*
prefer not to use var and also not use only name : use Just const or let when we use const the value for that 
variable will not change and when we use let we can change the value for that variable.
when we use var we will face issue in block scope and funciton scope.
*/

console.table([accountEmail,accountPassword,accountCity,accountState])