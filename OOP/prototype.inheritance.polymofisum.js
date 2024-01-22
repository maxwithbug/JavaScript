//prototype (in js almost everything has a prototype ,it's like a template like(Arrays: Arrays in JavaScript inherit from Array.prototype ,,Functions: Functions in JavaScript inherit from Function.prototype))

//except--
/*  1.Object Literal: Objects created using the literal notation {} don't have a specific prototype other than the default object prototype.
    2.Custom Objects with null Prototype: You can create objects with Object.create(null) to have an object without a prototype.*/


/*if you create a array , that array has a prototype and
that prototype also has a prototype called (object )<- this is the
last layer of javascript  */

// example----

function Person( name ,age){
    this.name = name        // for function Constructor Is a function that holds the properties of the person [for constructor we cane use{this} in function ]
    this.age = age 
}

Person.prototype.greet = function(){
    console.log(`hello my name is ${this.name} age is ${this.age}`);
}

let rahul = new Person()
rahul.greet()
console.log(Person.prototype);
console.log(Person.prototype.constructor);  // constructor is a property ( in this case) that holding the reference of the person


//prototypal inheritance-----
//example-----

function Person2( name ){
    this.name = name   //**instance member 
}

Person2.prototype.greet = function(){   //**prototype member 
    console.log(`hello my name is ${this.name} `);
}

/* we can do prototypal inheritance in a funtional inheritance ( it's ex. of --> Functions: Functions in JavaScript inherit from Function.prototype) and ,
Custom Objects with null Prototype: You can create objects with Object.create(null) to have an object without a prototype.*/
function Employee(name ,empID){
    this.name =name 
    this.empID =empID
}

/*setp 1 */ Employee.prototype = Object.create(Person2.prototype)  // injecting person prototype to employee prototype {as a object } 
/*setp 2 */ Employee.prototype.constructor = Employee           


//jut making a  method 
Employee.prototype.showEMP = function(){
    console.log(`emp is ${this.name} id is ${this.empID}`);
}


let suman = new Employee('suman',712)
suman.showEMP()
suman.greet()


//**static method--->(with out  constructor and inherit )
//example....
function Person3( name ){
    this.name = name
}

Person3.createNewPerson =  function(name){  //this is the static methode  (no need to use instance member )
    return new Person(name)
}
let meow = Person3.createNewPerson("meow")  //accessing without (new)  (creating object depending on 'createNewPerson' method )
console.log(meow.name);
































