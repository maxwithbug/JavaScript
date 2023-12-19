const { render } = require("react-dom")

const inputtt = document.getElementById('inputtt')
const image = document.getElementById('image')


const show = inputtt.value
console.log(show)
    const display = inputtt.addEventListener('change' ,()=>{
        let reader = new FileReader()
        reader.readAsDataURL(inputtt.files[0])
        reader.addEventListener('load',()=>{
            display.image(reader.result)
        })

})


