
//testing splice (adding ,deleting) and catching the removed item

let num = [ "i am", "playing", "footbal" , "now" ];

let removed  = num.splice( 2 , 1,"batbool");

console.log(num);
console.log(removed);

let number =[12 ,33,2,0];

number.push(22);
console.log(number);


//constructor creating and passing the arguments as object form for the accurate sequence...

function Person({age, name}) {
    
    this.age = age;
    this.name = name;
}

const john = new Person({ name : 'John', age: 30});

console.log(john);


// Creates an array of 5 undefined elements
let arr3 = new Array(5);
console.log("Array 3: ", arr3)

// Creates an array with one element
let arr4 = new Array("apple");
console.log("Array 4: ", arr4)



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
    let se = student.find("suman");
    console.log(se);    
    // if(this.score >= 90 ){
    //     console.log(`congo ${this.name}`);
    // }
    
}

cal.call(student);




