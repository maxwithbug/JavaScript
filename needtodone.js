// // //TASK 1
// // let data = [ "suman","ritam","riya","rimpa"];


// // // let len = data.length;

// // function username(user) {

// //     let useravail = false ; //it's a flag 

// //     for(let i=0 ; i<= data.length ; i++){
// //             if(user===data[i]){
// //                 console.log(`yes ${user} is a valid user`); 
// //                 useravail = true ;
// //                 break;
            
// //             }
// //             console.log(data[i]);
// //     }
// //     //this need false value to execute 
// //     if(!useravail){
// //         console.log(` ${user} is not a valid user`);
// //     }


// //     console.log(data.indexOf(user));
// // }

// // username("riya");


// //task 2 
// function total() {
    
//     console.log(arguments);
//     let arr = Array.from(arguments);

//     console.log('arr',arr );
//     let sum = 0;

//     for(let item =0 ; item<arr.length ; item++){
//         console.log(arr[item]);
//         sum = sum+arr[item];
        
//     }
//     return sum;

// }

// let c = total(121,32,44,12);

// console.log(c);


// // The condition (item<=arr.length) will cause the loop to run one extra iteration. Because array indices start from 0, for an array of length 4 (for example), the valid indices are 0, 1, 2, and 3. But with the condition item<=arr.length, the loop will also run for item = 4, and arr[4] will be undefined. Adding undefined to a number (in your case, the sum) results in NaN.


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




