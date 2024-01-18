
//--class and constructor-- {it's a Sugar coating introduced in ES6 Update}
//**in Java script, there is no concept like class and object [under the  hood. all are  objects]

class Persone{   //class is like a coocie cutter
    constructor(name ,age){    //when we use the coocie cutter (class) ther constructor function will be called Definitely
        this.name = name    //creating new varible {(this)-- is for refarancing the current method that will call (this) }
        this.age = age      //this.(it can be anything , like (this.myage = age ))
    }
    organization = "tata"  //we  can't use[let , const , var ] , Because in Java script, there is no concept like class and object [under the  hood. It's a object{in object. We don't need to use let const and var.(it's all about key value pair)}] 
    static organization2 = "mahindra"  // help of[static] we can block the Property to be accessed.
    greet(){
        console.log(`hello ${this.name} and many many happy returns of the day for your ${this.age}'s birth day `);
    }
}

let rahul = new Persone("rahul",21)  //making object for class
rahul.greet() // object can access every property of class (now Rahul can access everything from person{in this case we are accessing greet() method.})
console.log(rahul.name);
console.log(rahul.organization);
console.log(rahul.organization2); 


//--so how classes under the hood works--

function newperson(name , age){
    this.name = name 
    this.age = age 
}

newperson.prototype.greet = function(){             // java script under the hood makes the methods using prototype in object (newperson)
    console.log(`hello ${this.name} age ${this.age}`);   
}


let kunal = new newperson("kunal",21)
kunal.greet()



//--inheritance--

class Animal{
    constructor(name){
        this.dogname = name
    }
}

class dog extends Animal{
    constructor(name , breed){
        super(name)         //passing value to the perent class to user it's property 
        this.dogbreed =  breed // can also add new property according to our need (this.breed)
    }
}

const snowy = new dog("snowy","husky")

console.log(snowy.dogname);
console.log(snowy.dogbreed);



//--constructor--
//you can't access properties with out making a constructor function (using new keyword)

function Persone2(name,age) {
    this.name = name
    this.age = age
    this.greet = function(){
        console.log(`hello ${this.name}  and his age is ${this.age}`);
    }
}
// let ritu =  Persone2("rahul",21) [you need to un-comment this line to understand]
// ritu.greet()
let suman = new Persone2("suman",20)
suman.greet()

//--steps of how new keyword works
/*
step 1
    new keyword makes a empty object (new - {}) 
step 2
    assign prototype to the object 
step 3 
    binding {this} to the prototype 
step 4 
    returns new object{}

*/




//--factory function--
/*It's nothing just writing style for constructor(in this case, 
    we don't have to use {new keyword} to access properties )

*/

function cb(name ,height){
    return{
        myyname : name,
        myyheight : height ,
        greet : function(){
            console.log(`hello ${this.myyname} height ${this.myyheight}`);
        }
    }
}

let meow = cb("meow",5.9)
meow.greet()

