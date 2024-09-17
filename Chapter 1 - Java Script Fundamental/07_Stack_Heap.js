// Stack (Primitives ) and Heap (Non Primitives)

//____________Stack ________________________________

let myYoutubeChannelName="Arslan Wali"

let anotherName=myYoutubeChannelName

anotherName="Wali"

console.log(myYoutubeChannelName);


console.log(anotherName);

//_________________Heap________________________________

let userOne = {

    email:"wali@google.com",
    password:"123456",
}

let userTwo = {
    email:"arslan@gmail.com",
    password:"654321",
}

userTwo=userOne

userTwo.email="arsalwali@yahoo.com"

console.log(userOne.email);

console.log(userTwo.email);