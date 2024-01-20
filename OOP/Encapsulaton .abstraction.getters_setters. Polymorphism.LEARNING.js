//Encapsulation Ex.{--who,where,when can access data}

//example---
function human(name ,age , height){
    this.name = name ;
    let _age = age ;//private using ( _ or #) {it's called encapsulating of data }
    this.greet = function(){ //we can private [methods] by --> ( _ ) {ex ->  _greet}
        console.log(`age ${_age}`); //[we can't acess it by {this._age } because max(this) has the refarance , so whats the point of private varible when any oner can access it  ][indiractly]
        //we can access {private varible} only [diracly]
    }
            /* but there is a way we can access the private varible indiractly*/
        /*--through METHOD-- */
        this.getAge = function(){
            return _age*2
        }
        /* so whats the point of doig private */
        /*some time you need [set method or you want a modified value thats why ] */
        this.setAge = function(age){
            if(age>0){
                _age = age 
            }else{
                console.log("Error , age is under 0 ");
            } 
        }
    

}

let max = new human("max",22,6.2)
console.log(max.name);
console.log(max._age); //can't access indiractly 
max.greet()
console.log(max.getAge());
max.setAge()





//Abstarction (--method for hide internal things from user for easier understanding{abstracting the data for simple use } like[for html under the hood c++ works, C++ process the data and passes the browser])

//example---

function BankAccount(accountNumber, balance){
    let _nowbalance = balance //private 

    let _isamountValid = function(amount){
        return typeof amount === "number" && amount>0
    }
    let deposit = function(amount){
        if(_nowbalance(amount)){
            _nowbalance += amount
            console.log(`deposite sucess ${amount} , the total amount is ${_nowbalance}`);
        }else{
            console.log('invalid balance');
        }
    }
    this.getbalance = function(){
        return _nowbalance
    }
}


//getters and setters --(preventing from gettig values {you can say custom control})

/*Getters and setters allow you to hide the implementation details of an object's properties ,
Using getters and setters instead of direct function calls for property access 
With getters and setters, you can perform validation or transformation logic when getting or setting a property.
 For example, you can ensure that a value is within a certain range or transform it before assigning it to the property. */


// examle---
class Person2{
    constructor(name,age){ /*in class (this Keyword ) is Compulsory */
        this.name = name 
        this._age = age //private 
        //_age = age //invalid
    }

    /*--[get ,set] is for making the things simpler ,with out (_age) user can't access the value 
    so we are making (age) for easier access for user  */ //--[special keyword for class only] ,because in function there is method for private values 


    get age(){ /*special keyword ->(get,set) is for controling the access  ,don't use  [ _ ] before method (like : get _age()) */ 
        return this._age+2
    }       
    set age(value){
        if(value>0){
            this._age = value
        }else{
            console.log('invalid age');
        }
    }    
}

const jhon = new Person2("jhon",33)
console.log(jhon._age);
console.log(jhon.age);  /*with out (get ,set) ,
the access can't be possible ,because [age is not a binded varible with --{this keyword }]
getter and setters are special methods which sets the unique object values (age ) .  thats why at the time of calling 
we don't need () */


//                        [we can do it with making a method and conditional statements ] ⬇️

/*---The main differences between using getters and setters versus methods (functions) with conditional statements--- for property access in JavaScript are primarily related to syntax, readability, and adherence to language conventions:

--------Syntax and Readability:--------

[Getters and Setters]--: Using getters and setters allows you to access properties in a manner that looks like regular property access. This leads to cleaner and more readable code, as the syntax is concise and aligns with the way properties are typically accessed in JavaScript.
[Methods with Conditional Statements]--: When using separate methods for getting and setting properties, you need to explicitly call these methods, leading to slightly longer and potentially less readable code. The syntax is less idiomatic compared to using getters and setters.

---------Consistency:---------------------

[Getters and Setters]--: Using getters and setters maintains a consistent syntax when dealing with properties, aligning with JavaScript conventions. This consistency contributes to code maintainability and readability.
[Methods with Conditional Statements]--: With separate methods for property access, you may have a less consistent syntax, and the code may not align as closely with the standard way of interacting with object properties in JavaScript.


-----------Object-Oriented Style:----------

[Getters and Setters]--: The use of getters and setters is more in line with object-oriented programming principles. It encapsulates the internal state of an object and provides a clean interface for interacting with its properties.
[Methods with Conditional Statements]--: While methods can achieve similar results, the code may appear less object-oriented and may not follow the conventions commonly used in JavaScript for handling properties. */




// Polymorphism (--method overriding)

//example 

class Animal{
    constructor(name){
        this.name = name
    }

    makesound(){
        console.log('some sound');
    } 
}


class dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed  
    }
    makesound(){
        console.log('woff woff');
    } 
}

class cat extends Animal{
    constructor(name,color){
        super(name)
        this.color = color
    }
    makesound(){
        console.log('meow');
    } 
}

const genaric = new Animal('Gen')
const ted = new dog('ted','husky')
const tom = new cat('tom','white')


genaric.makesound()
ted.makesound()
tom.makesound()