// let products = [
//         {name: "laptop", price: "120000"},
//         {name: "mobile", price: "70000"},
//         {name: "laptop bag", price: "20000"},
//         {name: "watch", price: "20000"},
//         {name: "mobile charger", price: "1500"},
//     ];
    
//     function maxmin() {
//         let minPrice = Infinity; // starting with a very high value
//         let maxPrice = -Infinity; // starting with a very low value
//         let minProduct = null;
//         let maxProduct = null;
    
//         for(let i = 0; i < this.length; i++) {
//             let currentPrice = parseInt(this[i].price, 10); // convert price string to integer
    
//             if (currentPrice < minPrice) {
//                 minPrice = currentPrice;
//                 minProduct = this[i];
//             }
    
//             if (currentPrice > maxPrice) {
//                 maxPrice = currentPrice;
//                 maxProduct = this[i];
//             }
//         }
    
//         console.log('Cheapest product:', minProduct.name, 'with price:', minProduct.price);
//         console.log('Most expensive product:', maxProduct.name, 'with price:', maxProduct.price);
//     }
    
//     // call the function with the products array as its context
//     maxmin.call(products);
    



// let products = [
//         {name: "laptop", price: "120000"},
//         {name: "mobile", price: "70000"},
//         {name: "laptop bag", price: "20000"},
//         {name: "watch", price: "20000"},
//         {name: "mobile charger", price: "1500"},
//     ];
    
//     function maxmin() {
//         let prices = products.map(product => parseInt(product.price, 10)); // Convert all prices to integers
    
//         let minPrice = Math.min(...prices);
//         let maxPrice = Math.max(...prices);
    
//         console.log('Lowest price:', minPrice);
//         console.log('Highest price:', maxPrice);
//     }
    
    
    
//     maxmin();
    


//     var emp = {
//         name :"suman",
//         age :"20",
//         job :"ceo"
//     }

//     let key = Object.keys(emp).forEach((key) => console.log(key));  //method chaining
//     // console.log(key);
//     console.log(Object.values(emp));

//     let allthiings = Object.entries(emp) ; 
//     console.log(allthiings);


//     let convertobjectagain = Object.fromEntries(allthiings);
//     console.log(convertobjectagain);

//     // let ent = (Object.entries(emp)).forEach((ent) =>console.log(ent)) 
//     // console.log(ent);


// //task 4
//     //collecting every element
//     var item = {
//         name :"suman",
//         age :"20",
//         job :"ceo"
//     }

//     let collector = [];

//     while(collector.length >0){
//         let pushitem = item.splice(0 ,1)[0] ;
//         collector.push(pushitem);
//         console.log(pushitem);
//     }
//     console.log(collector);





    // let products = [
    //             {name: "laptop", price: "120000"},
    //             {name: "mobile", price: "70000"},
    //             {name: "laptop bag", price: "20000"},
    //             {name: "watch", price: "20000"},
    //             {name: "mobile charger", price: "1500"},
    //         ];
            
    //         // function maxmin() {
    //         //     let max = null ;
    //         //     let min = null; 

    //         //     for(let i =0 )
    //         // }

    //         let max = { name: "", price: 0 };
    //         let min =  { name: "", price: Number.MAX_VALUE };

    //         // let max = null ;
    //         //     let min = null; 

    //             for(item of products){
                    
    //                 let priceNumber = parseInt(item.price);

    //                 if(item.price < min.price){
    //                     min = item ;

    //                 }
    //                 if(item.price > max.price){
    //                     max = item
    //                 }

    //             }
    //             console.log(`the maximum price is ${max}`);
    //             console.log(`the minimum price is ${min}`);


    let products = [
        {name: "laptop", price: "120000"},
        {name: "mobile", price: "70000"},
        {name: "laptop bag", price: "20000"},
        {name: "watch", price: "20000"},
        {name: "mobile charger", price: "1500"},
    ];
    
    let max = { name: "", price: 0 };
    let min = { name: "", price: Number.MAX_VALUE};
    
    for(item of products){
        let priceNumber = parseInt(item.price); // Convert string to number
    
        if(priceNumber < min.price){
            min = item;
        }
        if(priceNumber > max.price){
            max = item;
        }
    }
    
    console.log(`the maximum price product is ${max.name}  at ${max.price}`);
    console.log(`the minimum price product is ${min.name}  at ${min.price}`);
    

    