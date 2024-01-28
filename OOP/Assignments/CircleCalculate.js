//main class
class Shape{
    constructor(){
    }
}
//sub class(circle)
class Circle extends Shape{
    constructor(redius){
        super()
        this.redius = redius
    }
    Calculatearea(){
        return Math.PI*this.redius**2
    }
    Calculateparameter(){
        return 2*Math.PI*this.redius
    }

}
//sub class(ractangle)
class Ractangle extends Shape{
    constructor(height , width){
        super()
        this.height = height
        this.width = width
    }
    Calculatearea(){
        return this.height*this.width
    }
    Calculateparameter(){
        return 2*(this.height+this.width)
    }

}
//sub class(triangle)
class Triangle extends Shape{
    constructor(a,b,c,d,e){
        super()
        this.a = a 
        this.b = b
        this.c = c 
        this.d = d
        this.e = e

    }
    Calculatearea(){
        const s = (this.a+this.b+this.c)/2 //+this.d+this.e)
        return Math.sqrt(
            (s*(s-this.a)*(s-this.b)*(s-this.c)) //(s-this.d)*(s-this.e)
        )
    }
    Calculateparameter(){
        return this.a+this.b+this.c//+this.d+this.e
    }

}


//calling methods()
const circle = new Circle(5)
console.log(`circle - Area : ${circle.Calculatearea()} , parameter : ${circle.Calculateparameter()}`);



const rectangle = new Ractangle(4,6)
console.log(`Ractangle - Area : ${rectangle.Calculatearea()} , parameter : ${rectangle.Calculateparameter()}`);



const triangle = new Triangle(8,6,5,7,10)
console.log(`triangle - Area : ${triangle.Calculatearea()} , parameter : ${triangle.Calculateparameter()}`);