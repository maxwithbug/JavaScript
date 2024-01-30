const button = document.getElementById('btn')
const col= document.getElementById('color')
const colorTexxxt = document.getElementsByClassName('color')


hexarray =[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '7',
    '6',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    
    ]

button.addEventListener('click',()=>{
    //genarating hex color
    const hex = genhex();
    // alert(hex)
    document.body.style.backgroundColor = hex ;
    colorTexxxt.textContent = hex ;
    col.textContent = hex ;
}
)
//function to geanrate hex color
const genhex = ()=>{
    let hexcolor = '#'
    for(let i = 0 ; i<6 ; i++){
        hexcolor += hexarray[Math.floor(Math.random()*hexarray.length)]
    }
    return hexcolor
}
