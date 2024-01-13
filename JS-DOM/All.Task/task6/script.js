let heading = document.querySelector('.heading')
let select = document.querySelectorAll('.select')
let main = document.querySelector('.main')

let item = [
    'javascript',
    'java',
    'c++',
    'python'
]

//heading
heading.textContent = "Which is your favorite programming language :"

let sectionn = document.createElement('select')



//adding item to list 
for(let adding = 0 ; adding<item.length ; adding++){
    // let selectlanguage = document.querySelectorAll('#language')
    let select = document.querySelectorAll('.select')


    //creating option for section
    let option = document.createElement('option')
    //setting value  
    option.textContent = item[adding]
    //inserting to html

    
    sectionn.appendChild(option)
    main.appendChild(sectionn)
    
}

