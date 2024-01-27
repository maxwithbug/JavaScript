function Product(name, category, price,stock){
    this.name = name
    this.category = category
    this.price = price     
    this.stock = stock
}
//making an Inventory constructor function
function Inventory(product){
    this.item = []

    this.addproduct = (product)=>{
        this.item.push(product)
    }

    this.deleteproduct = (product)=>{
        // let deleteitem = this.item.filter((itm)=>itm.name===product)  
        const remainingproductARRAY  =  this.item.filter((itm)=>itm!=product)  //The (filter) method returns a new array containing the elements that pass the provided function's test .and storing new input again in array  
        this.item = remainingproductARRAY;
        if(remainingproductARRAY.length>0){
            console.log(`product ${product} deleted sucessfully`);
            console.log(remainingproductARRAY);
        }else{
            console.log(`wrong input for delete`);
        }
    }
}

const inventory = new Inventory

const product1 = new Product('laptop','electronics',70000,100)
const product2 = new Product('Book','Book',300,10)

inventory.addproduct(product1)
inventory.addproduct(product2)
console.log(`products, added sucessfully`);
console.log(inventory.item);

inventory.deleteproduct('laptop')
