let form = document.querySelector(".firstform");

form.addEventListener("submit", ()=> {

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

  // console.log(name);

  //converting the input into array
  let namearray = name.split("");
  let passwordarray = password.split("")

  console.log(namearray);


  
//cheacking name field
let namm = namearray.length
if(namearray!=""){
  if(namm<3){
    alert("name must have minimum 3 character ,form validfation faild");
  }
}
 //cheaking password 
let pass = passwordarray.length
if(passwordarray!=""){
    if(pass<10){
        alert("password must have minimum 10 character ,form validfation faild");
    }
}

  });


