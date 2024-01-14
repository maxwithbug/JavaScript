let storeitems = {
    item1: {
        name: "Laptop",
        price: 899.99
    },
    item2: {
        name: "Smartphone",
        price: 499.99
    },
    item3: {
        name: "Headphones",
        price: 79.99
    },
    item4: {
        name: "Coffee Maker",
        price: 129.99
    },
    item5: {
        name: "Fitness Tracker",
        price: 59.99
    }
};

//convertiong the price into rupess
Object.keys(storeitems).map((key)=>{
    let item = storeitems[key]
    let itemprice = item.price*80
    console.log(`${item.name}'s price in indian rupess is ${itemprice}`);
})
