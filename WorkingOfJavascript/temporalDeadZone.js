function add()
{   
    console.log(a);  //[ex.of TDZ(temporal dead zone )] i printed the value before execution (output :Error (for let) )
    
    let a = 10 

    console.log(a);  

}

add()