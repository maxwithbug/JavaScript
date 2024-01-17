//promises 
function input (name)
{
    let result = new Promise((resolve,reject)=>{
        resolve(name)
    })

    return result
}

let result = input("suman")
result.then((result) => {
    console.log(`Hello ${result}`);
}).catch((err) => {
    console.log("error");
});