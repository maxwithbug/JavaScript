let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let text = document.querySelector('#text')

let count = 0;
//plus oparation
plus.addEventListener('click',()=>{
    let latest = ++count
    text.textContent = latest ;  
});
//minus oparation
minus.addEventListener('click',()=>{
    let latest = --count
    text.textContent = latest ;  
    //error massage 
        if(count<0){
            alert('Counter is going beyond 0')
}
});



