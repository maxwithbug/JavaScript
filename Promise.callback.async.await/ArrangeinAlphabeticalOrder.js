let books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    
];

function high(obj , fun )
{
    let newarr =[]
    obj.map(Element=>{
        let title = Element.title
        newarr.push(title)
    })
    fun(newarr)
}



high(books , log)

//callback
function log(newarr)
{
    console.log(newarr);
}