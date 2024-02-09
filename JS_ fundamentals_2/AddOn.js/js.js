//arrray

let ar = new Array(1,3,2,4,7)
console.log("normal array "+" "+ar);
let br = new Array(1,3,2,4,7)
console.log(ar);
let cr = new Array("man","woman","gay")
console.log("n"+cr);
let dr = new Array("man","woman","gay")
console.log(dr);

//5 empty element array 
let emp = new Array(5)  // Creates an array with length 5 but no elements
console.log("empty array "+" "+emp);








//normal function...

function hello (){
    console.log("hello ,ps5");
}
hello();


// immediately invoke function expression(iife) or self invoking function expression....

(function exe(){
    console.log("hi");
})();    // calling the function where Declared


(function xx(para){
    console.log(para*para);
})(5);    // passing argument 







// another way of creating object

function car(i,n,r){
    this.id = i 
    this.name = n 
    this.run = r
}

let finalcar = new car(493,"honda","petrol");
console.log(finalcar);

//or 

let cow = new Object()
cow.name = "vombol"
cow.eat = "grass"
console.log(cow);



/*getting object's values  */

console.log(finalcar.id);
console.log(finalcar['name']);

console.log(cow.name);
console.log(cow['eat']);


/*assining values */

finalcar.model = 1969
console.log(finalcar);

finalcar.insurance = "2st party"
console.log(finalcar);

finalcar['insurance'] = "1st party"
console.log(finalcar);

/*deleting na key value pair */

delete finalcar.insurance
console.log(finalcar);


/*getting all keys of a object  */
let house ={
    name : "bulbul",
    madein : 1970,
    madeBY : 'jamindar sri suman pakira '
}

let keys = Object.keys(house)  //Object.keys(house) ->this function returns a array
console.log(keys);
let value = Object.values(house)
console.log(value);
let enti = Object.entries(house)
console.log(enti);


/*if you want to freeze any object (making immutable) */
Object.freeze(house)
house.name = 'nnnnnn'
house.add = 'darjiling' //adding items also won't work [every thing is freezed]

console.log(house);



/*if You want to allowed the updates without freezing */
Object.seal(house)
house.name = 'nnnnnn'
console.log(house);


/*copy a exsistting object to a new objedct */

let mahel = Object.assign({},house)
console.log('it was a mahel not a house');
console.log(mahel);


let mahel2 = Object.assign({location:'jharkand'},house)  //adding new information by {location:'jharkand'}
console.log('mahel2 specification');
console.log(mahel2);








