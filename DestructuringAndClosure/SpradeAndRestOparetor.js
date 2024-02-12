/*sprade and rest oparetor */
//*** they both are denoted by[...] */


/*WORK*/
/*SPRADE oparetor*/
// 1.can create new copy
// 2.adding new values
// 3.concatenate two arrays
// 4.sprade an Array of arguments as Individuals
// 5.can be used with string , objects 
// 6.sprade Converted the iterable Into single arguments....

/*1st ex... */
let arr1 = [13,45,88,90,0] 
let arr2 = [...arr1]  //works only SHALLOW copy 
console.log('arr2',arr2); 


/*2st ex... */
let arr3 = [13,45,88] 
let arr4 = [...arr3,90,0]  //adding values
console.log('arr4',arr4); 
//for object....
let obj1 = {
    name :'cool',
    age :25,
    location:'hongkong'
}
let obj2 ={...obj1,job:'san fransisco'}
console.log(obj2);

/*3st ex... */
let arr77 = [9,8]
let arr78 = [8,9]

let concattinatedarr = [...arr77,...arr78]
console.log(concattinatedarr);

/*4st ex... */
let number =[88,5,4,232,1]
function calculateMAX(num1,num2,num3){
    return Math.max(num1,num2,num3)
}
console.log(calculateMAX(...number));


/*5st ex... */
let st = 'student learnig '
let res = [...st]
console.log(res);


/*6st ex... */
let objj44 = {
    name :'noob',
    course :'full stack'
}
let objj55 = {
    name :'boob',
    course :'full suck'
}
let newObj={...objj44,...objj55}
console.log(newObj); //***if the keys are same then it will take the [last one's keys ], in this case {objj55}




let objj66 = {
    name :'noob',
    course :'full stack'
}
let objj67 = {
    loc :'saiman',
    will :'goo'
}
let newObj2={...objj66,...objj67}
console.log(newObj2);//in this case the keys are not same 





/*REST oparetor*/
//rest Converted single elements into an array...


/*here is two Advantages */
//1.collecting all reaming parameters in  a function 
function collectc(...numbers){  //numbers is [rest oparetor]
    // let makearr = [numbers]
    let makearr = numbers
    console.log(makearr);
    const total = makearr.reduce((acc,curr)=>{
        return acc += curr
    },0);
    console.log('total is ',total);
};
collectc(1,435,3,1,12,2)


//2.de-structring
let tech = ['html','css','js','node','express','git','tailwind']
let [ele1,ele2,...reaming] = tech  //if we want reaming element with out 'html' and 'css'
console.log(ele1,ele2);
console.log(reaming);











































