//getting the html elements 
let maindiv = document.querySelector('.maindiv')
let thebox = document.querySelector('.the-box')


//setting function for real time update
setInterval(()=>{
//getiting time 
    let datee = new Date()
    let Htime = datee.getHours()
    let Mtime = datee.getMinutes()
    let Stime = datee.getSeconds()

//the main function for getting the accurate value 
    console.log("Hours , minutes , second")
    if(Htime != datee.getHours() ){
        Htime = datee.getHours()
        console.log(Htime);
    }else{
        console.log(Htime);
    }
    if(Mtime != datee.getMinutes() ){
        Mtime = datee.getMinutes()
        console.log(Mtime);
    }else{
        console.log(Mtime);
    }
    if(Stime != datee.getSeconds() ){
        Stime = datee.getSeconds()
        console.log(Stime);
    }else{
        console.log(Stime);
    }

//creating the h3 tag
let h3 = document.createElement("h3")
//setting the attribute vlue (like : class attribute )
h3.setAttribute("class","h3")
//inserting the h3 to html
thebox.appendChild(h3)



//inserting the time to h3 tag for dispplay in webpage 
let h3tag = document.querySelector('.h3')

let totaltime = Htime +":"+Mtime+":"+Stime
//making the hours in 12 houre format 
let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
let houreformat = datee.toLocaleTimeString(undefined,timeOptions)

h3tag.textContent = houreformat


//changing the background color according to time 
    hex = "#"+Htime+Mtime+Stime


//setting the value in background
document.body.style.backgroundColor = hex
window.location.reload() //for continue changing color

},1000)
