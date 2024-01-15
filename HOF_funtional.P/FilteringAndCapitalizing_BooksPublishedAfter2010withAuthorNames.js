let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 2021
    },
    {
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 2022
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publicationYear: 1951
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 3000
    }
];


let newarray = []
Object.keys(books).map((keys)=>{   //keys is first parameter of map (the first prarameter returns index)
    let gettingitembyindex = books[keys] //giving the index to books to find each {}
    let pricecollect = gettingitembyindex.publicationYear
    if(pricecollect<=2010){
        newarray.push(gettingitembyindex)
    }
})
console.log(newarray);


//notes
//It seems like you are trying to filter out books published before or in the year 2010 from the books array and store them in the newarray. The issue with your code is that you are logging the newarray inside the map function, which causes it to print the array at each iteration.

// If you place the console.log(newarray) inside the map function, it will still print the array at each iteration. However, in your specific example, you are reinitializing newarray in each iteration of the map function, which means you'll only see the current item in the array.

//this note for this code : 

// Object.keys(books).map((keys)=>{   //keys is first parameter of map (the first prarameter returns index)
//     let newarray = []
//     let gettingitembyindex = books[keys] //giving the index to books to find each {}
//     let pricecollect = gettingitembyindex.publicationYear
//     if(pricecollect<=2010){
//         newarray.push(gettingitembyindex)
//     }
//     console.log(newarray);
// })





