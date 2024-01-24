class Temperature{
    constructor(){
        this.BaseCel = 0   //fixed
        this.BaseFaren = 32 //fixed
    }
    get getcelcius (){
        return this.BaseCel
    }
    get getFahrenheit (){
        return this.BaseFaren
    }
    set setcelcius(temp){
        if(typeof temp ==='number'){
            this.BaseCel = temp
            this.BaseFaren = (temp *9/5)+32;
        }else{
            console.log('invalid input');
        }
    }
    set setFahrenheit(temp){
        if(typeof temp ==='number'){
            this.BaseFaren = temp
            this.BaseCel = (temp - 32) * 5/9;
        }else{
            console.log('invalid input');
        }
    }
}




const temperature = new Temperature();

console.log(`initial celcius : ${temperature.getcelcius}°C `);
console.log(`initial Fahrenheit : ${temperature.getFahrenheit}°F `);


temperature.setcelcius = 25;
console.log(`initial celcius : ${temperature.getcelcius}°C `);
console.log(`initial Fahrenheit : ${temperature.getFahrenheit}°F `);

temperature.setFahrenheit = 69;
console.log(`initial celcius : ${temperature.getcelcius}°C `);
console.log(`initial Fahrenheit : ${temperature.getFahrenheit}°F `);