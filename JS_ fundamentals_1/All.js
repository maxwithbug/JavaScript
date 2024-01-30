


//TASK 1 :
//this code is foor calculating discount in total amount

let totalvalue = 1000;
let discount = 20 ; 

let afterdiscount = totalvalue-(totalvalue*discount/100);
console.log(afterdiscount);


// TASK 2 : 
// This code is for cheacking conditions for login page


let username = "admin";
let password = "12345"

if (username="admin" && password == "12345"){
    console.log("login successfull");
}else{
    console.log("login failed");
}

//TASK 3 :
//this code for converting (INR) TO (USD) 


let INR = 850 ;
let usd = 10.365853658536585 ; 
let officialINR = 82 ; 


    var inINR = officialINR*usd;

    var inRtoUsd = INR/officialINR ; 


console.log( "usd to inr : " ,inINR);

console.log("inr to usd  : " ,inRtoUsd);


//TASK 4 :
// Ticket price calculator 

let numberofChild = 2 ;
let numberofAdult = 1 ;
let numberofSenior = 1 ;

let cticketpri = 100 ;
let aticketpri = 150 ;
let sticketpri = 120 ;

for(let c = 0 ; c<=2 ; c++ ){
    var thectotal = numberofChild*cticketpri;
    var theatotal = numberofAdult*aticketpri;
    var thestotal = numberofSenior*sticketpri;
}

let totall = theatotal+thectotal+thestotal;
console.log(totall);


//TASK 5 :
// testing switch case for payments 

let input = "overnight" ;

switch (input) {
    case "standerd":
        console.log("the delivery might take 3-5 days");
        break;
    case "express":
        console.log("the delivery might take 1-2 days");
        break;
    case "overnight":
        console.log("delivery in next day");
        break;

    default:
        console.log("there is no such options");
        break;
}


//TASK 6 :
//input type checking in web form 

let name = "suman" ;
let age = "20" ; 
let email = "abd@gmail.com";

if (typeof name != "string"){
    console.log("name should be a string");
}
if (typeof age != "number"){
    console.log("age should be a number");
}
if (typeof email != "string"){
    console.log("email should be a string");
}


//TASK 7 :
// listing my shoping cart items 

let items = ["banana","apple", "mango","milk","candey","baloon","ball"];

for (let a=0 ; a<items.length;a++){
    console.log(items[a]);
}


//TASK 8 :
//counting 10 - 0 

let c = 10;
while (c>=0) {
    console.log(c);
    c--;
}

//TASK 9 :
//finding the first string  in array

let test = [1 ,3 ,"suman",8 , 0 ,"hello"]

for(let m = 0 ; m<test.length ; m ++ ){
    if(test[m]<=0 || test[m]>=0){
        continue;
    }else{
        console.log(test[m]);
    }
}

//TASK 10  :
//finding the positive numbers in a array

let testnumber = [1 ,3 ,-22,-11 , 0 ,9];


for(let n = 0 ; n<testnumber.length ; n++ ){
    if(testnumber[n]>=0){
        console.log(testnumber[n]);
    }
}





























