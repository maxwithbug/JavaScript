
//higher orfer function
function manipulatestring(item , fun)
{
    let upper = item.toUpperCase()
    return fun(upper)
}


let result = manipulatestring("hello World!" , logString)
console.log(result);

//callback function
function logString(item)
{
    return (`manipulated string is ${item}`)
}


