
//task 1
const car ={
    Make : 1969 ,
    Year :1969 ,
    Model : "selbe Mustang" 
}

function display(obj){

    let store = Object.entries(obj)
    console.log("The car properties are : ");
        for(let [key , val] of store){
            console.log(key , val);
        }
    
}

display(car);


//task2 
const  student ={
    name : "babe",
    age : 20 , 
    grade : "A+"
}

function upgrade(newgrade){
     student.grade=newgrade;
        console.log(student);
}

let newgrade = "AA";

upgrade(newgrade)


//task 3

const nomb = {
    job :"SDE3",
    place : "Google",
    year :"2022",
    exprience :"5 years"
}


function counttt(nomb){
    count  = 0 ; 
    for(keys in nomb){
        count = count+1

    }
        console.log(`item number is ${count}`);
}


counttt(nomb);



// trak 4

const nomb = {
    job :"SDE3",
    place : "Google",
    year :"2022",
    exprience :"5 years"
}

function check(nomb , chimta){
    let sett  = new Set()

        for (keys in  nomb){
            
            sett.add(keys)
        }



        if(sett.has(chimta) === true){
            console.log(" item is present");
        }else{
            console.log(" item is not present");
        }

    }

check(nomb ,"job")



// task 5 



function calcircle(r){
    let result = Math.PI*Math.pow( r ,2)
    console.log(result);
    console.log("the roundof value is " , Math.trunc(result));
}

calcircle(6)


//task 6

function rev(st){
    return st.split("").reverse().join()
}
        


let cat = rev("babe")
console.log(cat);


rev("doll")

//task7

let userdata = {
    name :"suman" ,
    age  : 20 ,
    email: "pussycast@gmail.com"
}

let keyval = Object.entries(userdata)

let fmap = new Map()
    fmap.set(1 , userdata)    

        function add( id , name , age , email ){
            fmap.set(id,{name , age , email})
            console.log(fmap);
        }
        function remove(id){
            fmap.delete(id)
            console.log(fmap);
        }
        function update(id ,name , age , email ){
            let emp = fmap.get(id) ||{id} ;
            if(name != undefined) emp.name = name 
            if(age != undefined) emp.age = age 
            if(email != undefined) emp.email = email 
            fmap.set(id , emp)
                console.log(fmap);
        }
        

    


    add( 2 , "meow" , 40  ,"babay@gmail.com")
    update( 3 , "doll" , 10 , "beral123@gmail.com")
    remove(2)





// returing keys (smae goes for values)
// let newit = new Map(
//     [
//         [ 'aa', 300],
//         [ 'bb', 400],
//         [ 'cc', 500],

//     ]
// );


// for ( let hh of newit.keys()){
//     console.log(hh);
// }

// newit.forEach((key , val , map )=>{
//     console.log(`keys ${key} values ${val}`);
// })

// console.log(newit.entries());
// console.log(Object.fromEntries(newit.entries()));


