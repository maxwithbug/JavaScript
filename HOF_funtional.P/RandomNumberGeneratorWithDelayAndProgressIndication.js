let delaytime = 3000

//random no. generator 
setInterval(() => {
    let collect = Math.round(Math.random()*9)+1
    console.log(collect);
}, delaytime);