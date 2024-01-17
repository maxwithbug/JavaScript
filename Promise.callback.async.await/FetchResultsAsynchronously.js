function fatch()
{
    // let p = new Promise((resolve,reject)=>{
        return fetch('https://jsonplaceholder.typicode.com/todos/1') //don't need to manually call resolve and reject when using the fetch API, because the fetch API itself returns a promise that will be automatically resolved with the response when the request is complete.
        .then(response=>{
            
            if(!response.ok){
                throw new Error("can't get the fatch response from url ")
            }
            return response.json();
            
            // console.log(response.status)  [for checking the status code [it's 200 now]]
            // console.log(response.json);
        })
        // .then(result=>{   //catching the {response.json} [output in console =>   Promise {{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }]
        //     resolve(result)
        //     console.log(p)
        // })
    // })
    // return p
}

fatch()
    .then(item=>{
        console.log(item);  //catching the {response.json} [output =>  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }]
    })

    