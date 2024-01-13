// const input = document.querySelector('input');

//input array 
let inputarray =[
    'Html',
    'Css',
    'Tailwind Css',
    'Github',
    'javasacript'
]


//input collection for (search function)
let collect = []


//getting user input in real time 
const input = document.querySelector('.input')
let value = '';
setInterval(() => {
    if(value !== input.value){
        value = input.value
        console.log(value)
    }
    gg()
}, 1000);


//main idea...
//searching function works on the input
function gg() {

    // clearing previos thing 
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    //adding new list according to search
    for(let a = 0 ;a<inputarray.length;a++){
        let inputarrcollect = inputarray[a].toLowerCase()
        if(inputarrcollect.includes(value.toLowerCase())){
            let li = document.createElement('li')
            li.innerText = inputarrcollect
            li.setAttribute("class","list ")
            list.appendChild(li)
        }
    }
    
}

//adding the list item
let list = document.querySelector('.list')
for(let iteration = 0 ; iteration<inputarray.length ; iteration++){
    let li = document.createElement('li')
    li.innerText = inputarray[iteration]
    li.setAttribute("class","list ")
    list.appendChild(li)
    
}
