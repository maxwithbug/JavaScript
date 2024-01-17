//number array named as int 
let int = [1,3,4,5,6,69]

    function double(arr ,values) //double is a higer order function
    {
        values(arr)            //value is a callback
    }


double(int,cb) //calliing double [higher order function] with a value [int] and a callbacck[cb] , it's also a ex.of hoisting

    //callback function
    function cb(arr)
    {  
        arr.forEach(element => {
            console.log(element*2);  //you can return value but [you have to create a new array and then push the new values and return the new {array}]
        });
    }


                    //another way [without creating a new {array}]




// let int = [1,3,4,5,6,69]

        // function double(arr ,values) 
        // {
        //    return values(arr)           
        // }


// let result = double(int,cb) 
// console.log(result)

        // //callback function
        // function cb(arr)
        // {  
        //     return arr.map(element => element*2)
        // }