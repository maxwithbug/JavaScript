/*Try & Catch */
/*syntax */
try {
//block of code for teesting
} catch (error) {
    //block of code for addrassig errors    
}


/*if we have a code , we have to do . and we don't care about errors then we have to use [finally] */
try{

}catch(error){

}finally{
    //it block not depends on try and catch
}


//example 
try {
    let x = undefined
    console.log(x[0]);
} catch (error) {
    console.log('error handling ',);
    // console.log('error handling ',error);
}finally{
    console.log("finally always gets executed");
}

console.log('test');





