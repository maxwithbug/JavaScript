function Product(name, category, price,stock){
    this.name = name
    this.category = category
    this.price = price     
    this.stock = stock
}
//making an Inventory constructor function
function Inventory(){
    this.item = []
}


// Inventory.prototype.addproduct = ((product)=>{     
//     this.item.push(product)
// })

Inventory.prototype.addproduct = function(product){     //don't use Arrow function ,(this keyword) won't work
    this.item.push(product)
}
Inventory.prototype.deleteproduct = function(productName){    //don't use Arrow function ,(this keyword) won't work
    const itemindex = this.item.findIndex((product)=>product.name===productName)
    if(itemindex!==-1){
        this.item.splice(itemindex,1)
        console.log(`product ${productName} deleted sucessfully`);
    }else{
        console.log(`wrong input for delete`);
    }
    console.log(`remaining products are:`);
    console.log(this.item);
}


const inventory = new Inventory

const product1 = new Product('laptop','electronics',70000,100)
const product2 = new Product('Book','Book',300,10)
const product3 = new Product('jj','nob',9900,10)

inventory.addproduct(product1)
inventory.addproduct(product2)
inventory.addproduct(product3)
console.log(`products, added sucessfully`);
console.log(inventory.item);

inventory.deleteproduct('laptop')

