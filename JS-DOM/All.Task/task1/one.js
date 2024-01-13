

function change(){
    let image = document.querySelector('.img')
    let status = document.querySelector('.status')
    let input = document.querySelector("#imageUrlInput")

    console.log(input);

    let inputvalue = input.value;

    console.log(inputvalue);
    image.setAttribute("src", inputvalue);
    status.textContent = inputvalue;
}

input.addEventListener('change',change)


