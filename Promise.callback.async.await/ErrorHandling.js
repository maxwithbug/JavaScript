function retrive()
{
    fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    .then(Response=>{
        if(!Response.ok){
            throw new Error("can't get the data , check network")
        }
        return Response
    })
    .then(Response=>{
        console.log(Response);
    })
    .catch(err=>{
        console.error("something is not working in (retrive)",err.message)
    })
}

retrive()


//In JavaScript, when an Error object is thrown or caught, it has a property called message. The message property is a string that contains a human-readable description of the error. It is set when the Error object is created or when an error is thrown.
//ex.
// try {
//     throw new Error("This is an example error");
// } catch (error) {
//     console.error('Error:', error.message);
// }