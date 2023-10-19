//TASK 1
let data = [ "suman","ritam","riya","rimpa"];


// let len = data.length;

function username(user) {

    let useravail = false ; //it's a flag 

    for(let i=0 ; i<= data.length ; i++){
            if(user===data[i]){
                console.log(`yes ${user} is a valid user`); 
                useravail = true ;
                break;
            
            }
            console.log(data[i]);
    }
    //this need false value to execute 
    if(!useravail){
        console.log(` ${user} is not a valid user`);
    }


    console.log(data.indexOf(user));
}

username("riya");



//task 2 
function total() {
    
    console.log(arguments);
    let arr = Array.from(arguments);

    console.log('arr',arr );
    let sum = 0;

    for(let item =0 ; item<arr.length ; item++){
        console.log(arr[item]);
        sum = sum+arr[item];
        
    }
    return sum;

}

let c = total(121,32,44,12);

console.log(c);


// The condition (item<=arr.length) will cause the loop to run one extra iteration. Because array indices start from 0, for an array of length 4 (for example), the valid indices are 0, 1, 2, and 3. But with the condition item<=arr.length, the loop will also run for item = 4, and arr[4] will be undefined. Adding undefined to a number (in your case, the sum) results in NaN.





//task 3 

const student =[
    {
        name: "mitha",
        score: 95,   
    },
    {
        name: "suman",
        score: 75 ,
    },
    {
        name :"riya",
        score: 80 , 
    
    },
    {
        name :"Alka",
        score : 90,
    },
    {
        name:"piinki",
        score: 92
    },

    

]

function  cal(name) {
    let user = false;
    for(let i = 0 ; i<student.length;i++){
        //console.log(student[i].score); //getting the price by (.) , we are accessing the object with (.)


        if(name===student[i].name){    
            if(student[i].score>90){
                console.log(` congratulations ${name} cleared the test`);
                user = true;
                break;
            }else{
                console.log("sorry ! you can't make it ");
                user = true;
            }
    }

}
if (!user){
    console.log(`invalid user ${name}`);
}

}
cal("sumannn");

//task 4 
const products =[
    {name :"laptop",price:"120000"},
    {name :"mobile",price:"70000"},
    {name :"laptop bag",price:"20000"},
    {name :"watch",price:"20000"},
    {name :"mobile charger",price:"1500"},
    
];

function maxmin (call){
    // console.log(arguments);
    // let arr = Array.from(arguments);
    // console.log(arr);
    
    for(let i = 0 ; i<products.length;i++){
        console.log(products[i].price); //getting the price by (.) , we are accessing the object with (.)
    }
    
}

//borrowing fun the funn is global
maxmin.call(products);





//task 5 
let guest = ["anurag","suman","priya","ritaM","sahil","bela"];

// converting  array into string
let gueststring = guest.join(",");

// split function only works on string and it returns a array of string
let splitt = gueststring.split(",");
// console.log(typeof(gueststring));

//  another way to converting  array into string
let nono = guest.toString(); // or String(guest);
let nonono = nono.split(",");
console.log(nonono);


console.log(splitt);
console.log(gueststring);

//type of always returns a value , and we are Comparing with the value
let hh = typeof gueststring === "string";
console.log(hh);







//tak9
function check(hunu){
    let pre = new Set();
    for( let char of hunu){
        if(pre.has(char)){
            console.log("boom bam");
            return 1 ; 
        }
        pre.add(char);
    }
    console.log("The input string contains only unique characters.");
    return 0 ; 
}
check("sumann")


//task 10 

function check (box){
    let spli = box.split(/\s+/)
    console.log(spli);

    for(let sp of spli){
        let count = 0 ;
       for(let s of sp){
        count = count+1;
        
       }
        console.log(` ${sp} has ${count} char`);
    }
}


let box = "i am noob baby"; 
check(box);



