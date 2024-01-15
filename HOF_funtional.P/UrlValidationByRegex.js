let urlvalidformula = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

function validation(url) {
    let temp = urlvalidformula.test(url)
    if(temp!==true){
        return "its not a valid url"
    }else{
        return "its a valid url"

    }
}



let result = validation("https://drive.google.com/drive/folders/14J9BQsNm7xEwWKjOf7qXqyM9elIA10ac")
console.log(result);
