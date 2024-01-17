function retrive()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>{
        console.log(Response);
    })
}

retrive()