let urlvalidformula = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:linkedin\.com|linkedin.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/gm

function validation(url) {
    let temp = urlvalidformula.test(url)
    if(temp!==true){
        return "its not a valid linkedin url"
    }else{
        return "its a valid linkedin url"

    }
}



let result = validation("https://www.linkedin.com/in/suman-pakira-653195260/")
console.log(result);
