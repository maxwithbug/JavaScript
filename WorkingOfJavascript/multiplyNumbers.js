//demostrating hoisting of funtion (i called the fn before it's declared)

let result = multiplynumbers(10,20)
console.log(result);

function multiplynumbers(a,b)
{
    return a*b
}
