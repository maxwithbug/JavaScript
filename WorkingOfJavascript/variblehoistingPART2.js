function add()
{   
    console.log(a);  //[ex.of TDZ(temporal dead zone )] i printed the value before execution (output :Error (for let) )
    console.log(c);  //i printed the value before execution (output is undefined because of (hoisting) )
    console.log(b);  //[ex.of TDZ(temporal dead zone )] i printed the value before execution (output :Error (for const) )
    
    let a = 10 
    var b = 20 
    const c = 30

    console.log(a);  
    console.log(b);  
    console.log(c);
}

add()
