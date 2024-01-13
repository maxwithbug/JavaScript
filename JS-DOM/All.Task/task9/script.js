let maindiv = document.querySelector('.maindiv')
let login  = document.querySelector('.login')
let logout  = document.querySelector('.logout')


//main function  
// let auth = localStorage.getItem('auth') 




//checking condition 
let h1 = document.createElement('h1')

function checking() {
    let auth = localStorage.getItem('auth') 
    if(auth === "true"){
        h1.innerText = "User is loged in "
        maindiv.appendChild(h1)
        
    }
    if(auth === "false"){
        h1.innerText = "User is loged out "
        maindiv.appendChild(h1)
        // window.location.reload()
    
    }
}



login.addEventListener('click',()=>{
    let auth = localStorage.getItem('auth') 
    localStorage.setItem('auth', true )

    checking()
})

logout.addEventListener('click',()=>{
    let auth = localStorage.getItem('auth') 
    localStorage.setItem('auth', false )

    checking()
})




checking()

