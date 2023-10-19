// // // //TASK 1
// // // let data = [ "suman","ritam","riya","rimpa"];


// // // // let len = data.length;

// // // function username(user) {

// // //     let useravail = false ; //it's a flag 

// // //     for(let i=0 ; i<= data.length ; i++){
// // //             if(user===data[i]){
// // //                 console.log(`yes ${user} is a valid user`); 
// // //                 useravail = true ;
// // //                 break;
            
// // //             }
// // //             console.log(data[i]);
// // //     }
// // //     //this need false value to execute 
// // //     if(!useravail){
// // //         console.log(` ${user} is not a valid user`);
// // //     }


// // //     console.log(data.indexOf(user));
// // // }

// // // username("riya");


// // //task 2 
// // function total() {
    
// //     console.log(arguments);
// //     let arr = Array.from(arguments);

// //     console.log('arr',arr );
// //     let sum = 0;

// //     for(let item =0 ; item<arr.length ; item++){
// //         console.log(arr[item]);
// //         sum = sum+arr[item];
        
// //     }
// //     return sum;

// // }

// // let c = total(121,32,44,12);

// // console.log(c);


// // // The condition (item<=arr.length) will cause the loop to run one extra iteration. Because array indices start from 0, for an array of length 4 (for example), the valid indices are 0, 1, 2, and 3. But with the condition item<=arr.length, the loop will also run for item = 4, and arr[4] will be undefined. Adding undefined to a number (in your case, the sum) results in NaN.


// //task 3 

// const student =[
//     {
//         name: "mitha",
//         score: 95,   
//     },
//     {
//         name: "suman",
//         score: 75 ,
//     },
//     {
//         name :"riya",
//         score: 80 , 
    
//     },
//     {
//         name :"Alka",
//         score : 90,
//     },
//     {
//         name:"piinki",
//         score: 92
//     },

    

// ]

// function  cal(name) {
//     let user = false;
//     for(let i = 0 ; i<student.length;i++){
//         //console.log(student[i].score); //getting the price by (.) , we are accessing the object with (.)


//         if(name===student[i].name){    
//             if(student[i].score>90){
//                 console.log(` congratulations ${name} cleared the test`);
//                 user = true;
//                 break;
//             }else{
//                 console.log("sorry ! you can't make it ");
//                 user = true;
//             }
//     }

// }
// if (!user){
//     console.log(`invalid user ${name}`);
// }

// }
// cal("sumannn");


//task 4 
const products =[
    {name :"laptop",price:"120000"},
    {name :"mobile",price:"70000"},
    {name :"laptop bag",price:"20000"},
    {name :"watch",price:"20000"},
    {name :"mobile charger",price:"1500"},
    
];

function maxmin (call){
    
    
    for(let i = 0 ; i<products.length;i++){
        let p = 0 ;
        
        console.log(products[i].price);   //getting the price by (.) , we are accessing the object with (.)
        if(p<products[i]){
            p=products[i];
        }else{
            console.log(products[i]);
        }
        return p ;
    }
    // return p ;
}

//borrowing fun the funn is global
let maxxx = maxmin.call(products);
console.log("max price of the product is ",maxxx);




//task 6 

const products = {
    name : "apple macbook m1",
    prize :"100000",
    color :"space gray ",
    storage:"256gb ssd",
};

function print(){
    console.log("Below are the product details.");
for (let keys of Object.keys(products)) {
  console.log(`${keys} : ${products[keys]}`);
}
}

print.call(products);

//task 7 
//random otp


const arr = [ 1,2,3,4,5,6,7,8,9,0]

function otp(){
    for(let i=0 ; i<=3 ; i++){
      let a = (Math.random()*arr.length) // Random function, picks an item from the array and returns it as a float value. So we need to convert float to int ,  and the stps are  following :
      let int = Math.floor(a);  //converting float to int
      console.log(int);

    }
  
}

 otp();

//task 
//countdown timer


function couuntdown(date) {
  
return 9;

}

Event = "2023-08-31"
console.log(couuntdown(Event));


// let date = new Date();
// let day = date.getDate();  // Day of the month
// let month = date.getMonth() + 1;  // Month is 0-indexed, so +1 to get the actual month number
// let year = date.getFullYear();
// console.log(date);
// console.log(`${year}-${month}-${day}`);  // Logs the date in the format "YYYY-MM-DD"


//task 9 

function unique(dt) {

  let arr = dt.split("")
  // console.log(arr);


  for(item of arr){
    // console.log(item);

    let num = new Set(item)
    num.add()
    
   
    console.log("hh is " , num);
    

  }

  // let num = new Set(arr)

  // num.add("suman")
  // num.add("suman")
  // num.add("suman")
  // num.add("suman")

  // if(num.has(dt)){
  //   console.log("this string duplicate charecter");
  // }else{
  //   console.log("this sting has unique charecter");
  // }


}

unique("sumannn")










