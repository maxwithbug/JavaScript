function fetchdata()
{
    let todo = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(Response=>{
        return Response.json() //normal
    })
    let postd = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(Response=>Response.json()) //one liner 

    
    return Promise.all([todo,postd])  //promise.all expect any kind of iterable as it's argument so we are using [] to make a array of promises {returns after  promises to be resolved}
}

fetchdata()
    .then(([one,two])=>{        //this [] is for making it itarable 
        let combine ={
            todo : one,
            postdata : two
        }
        
        console.log(combine);
    })

