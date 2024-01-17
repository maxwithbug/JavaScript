let persone ={
    firstname: "John",
    lastname: "Doe",
    age: 25
};

//higher order function
function ageindays(obj , fun)
{
    let fname = obj.firstname
    let lname = obj.lastname
    let fullname = fname+" "+lname

    let ageindays = obj.age*365
    //calling callback function
    return fun(fullname , ageindays)
}

//calling the higher order function
let result = ageindays(persone ,call)
console.log(result);


//callback function
function call(fullname ,ageindays)
{
    return (`the persons fullname is :${fullname} , and his age in days is : ${ageindays}`);
}