let myDate = new Date();

console.log(myDate);


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2023,0,23);

console.log(myCreateDate);

console.log(myCreateDate.toDateString()); //);

let myCreatenDate = new Date("01-14-2023");

console.log(myCreateDate);

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatenDate.getTime());

let newDate= new Date();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());




`${newDate.getDay()} and the time`


newDate.toLocaleDateString('default',{

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})

