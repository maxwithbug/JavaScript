//demostrating hoisting of funtion (i called the fn before it's declared)

let result = addnumbers(10,20)
console.log(result);

function addnumbers(a,b)
{
    return a+b
}
