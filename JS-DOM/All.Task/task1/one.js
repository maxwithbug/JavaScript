let input = document.querySelector("#imageUrlInput")


function change(){
    let image = document.querySelector('.img')
    let status = document.querySelector('.status')
    
    let inputvalue = input.value;

    console.log(inputvalue);
    image.setAttribute("src", inputvalue);
    image.setAttribute("alt", inputvalue);
    status.textContent = inputvalue;
}

input.addEventListener('change',change)


