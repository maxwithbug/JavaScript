/* extracting values iterable like (array[],set ,objrct, nested array , nested object) 
annd can set the extracted value in a [varible]*/



//normaly 
let num1 = [1,23,34,4,45]
let arr = num1 //passed by refarance
console.log(arr[0]);



/*in DESTRUCTURIGNG */

let num2 = [1,23,34,4,45]
let [a,b,c] = num2 //extracting values  /*a = first item  , b = second item .....*/


console.log(a);
console.log(a,b);
console.log(a,b,c);



/*for string */
console.log('baby');
let [firstName, LastName ] = 'suman pakira'.split(' ')

console.log(firstName);
console.log(firstName,LastName);


/* requirement wise selection */
let num12 = [1,23,34,4,45,50]
let [d,,e,,f] = num12
console.log(d,e,f);


/* extracting two characters from a string */
let [q,,w] ='hello'
console.log(q,w);

/*now with set */
let boo = new Set([1,2,43,4,5,6])
let [first ,sec ,third] = new Set([1,2,43,4,5,6])

console.log(boo);
console.log(first ,sec ,third);


/*for Assignable  */
let usr = {};
[usr.name, usr.surname ] = 'tuthen khamin'.split(' ');

console.log(usr);



/*swaping vlaues */
let fname = 'arnab';
let sname = 'das';
[sname,fname] = [fname,sname]  // we are not creating new very well so we are not using let const or var 
/* we just form A array Then just swaped the Values */

console.log(fname);
console.log(sname);



/* object De-structuring*/
let obj = {
    username : 'suvho',
    email : 'sgreen@gmail.com',
    add:'hooghly'
};

let{username, email} = obj;
console.log(username,email);



/*if any property dosen't exists  */
let employee ={
    name :'new emp baby',
    id: 5898,
    location : 'hydrabad'
};
const {name,id, home= 'mumbai'} = employee ;//home dosen't exists thats why we are usning , default value [home = mumbai]
console.log(name);
console.log(home);
console.log(id);


/***** if we want to change properties[re-naming*/
let employee2 ={
    namee :'new emp baby',
    idd: 5898,
    location : 'hydrabad'
};
const {namee:idd,idd:location, homee= 'mumbai'} = employee2 ;//values Will Always be sat to what is written to the right,  for this case[idd,location]
console.log(location);
console.log(idd);


/****Extracting specific properties for a complex object*/
let comp ={
    n :'john',
    age:25,
    hobbies : ['coding', 'gaming', 'riding','travel', 'photography' ]
}
const{n,hobbies}=comp;
console.log(n,hobbies);


/**** Smart function parameters */
//easy for maintaning, because maintaning order is very inportent in real life
const user5={
    na : 'cool',
    loc:'kolkata',
    wnatToTravel : 'japan'
}
function log({wnatToTravel,na}){ // De-structuring direct in the function
    console.log(`wnatToTravel : ${wnatToTravel}, name :  ${na}`);
}
log(user5)


/****in the case of nested object */
let nestedObject = {
    key1: "val0",
    key2: {
      nestedKey1: "Value1",
      nestedKey2: {
        deeplyNestedKey1: "deeplyNestedValue1",
        deeplyNestedKey2: "deeplyNestedValue2"
      }
    },
    key3: "value3"
  };
  
const {key1 ,key2:{nestedKey1:vow}}=nestedObject //changing name to {vow}
console.log(key1,vow);






























