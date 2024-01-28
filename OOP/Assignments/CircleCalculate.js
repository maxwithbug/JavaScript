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
    constructor(base,height,side1,side2,side3){
        super()
        this.base = base 
        this.height = height
        this.side1 = side1 
        this.side2 = side2
        this.side3 = side3

    }
    Calculatearea(){
        return 0.5*this.base*this.height
    }
    Calculateparameter(){
        return this.side1+this.side2+this.side3
    }

}


//calling methods()
const circle = new Circle(5)
console.log(`circle - Area : ${circle.Calculatearea()} , parameter : ${circle.Calculateparameter()}`);



const rectangle = new Ractangle(4,6)
console.log(`Ractangle - Area : ${rectangle.Calculatearea()} , parameter : ${rectangle.Calculateparameter()}`);



const triangle = new Triangle(8,6,5,7,10)
console.log(`triangle - Area : ${triangle.Calculatearea()} , parameter : ${triangle.Calculateparameter()}`);