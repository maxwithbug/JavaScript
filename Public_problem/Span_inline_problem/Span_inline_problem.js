

//create element span tag
let span=document.createElement("span");


//add id & className to span tag
span.className = 'st';
span.id = 'red';
document.body.appendChild(span);
// document.body.style.display ="flex"  for inline 


//get color by id 
let redColor=document.querySelector("#red");

redColor.addEventListener("click",function(){
document.body.style.backgroundColor="red";
})



