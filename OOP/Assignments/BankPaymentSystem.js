class Bank{
    constructor(name , bal){
        this.name = name 
        this.bal = bal 
        this.diposit = function(bal){
            if(bal>0){
                this.bal +=bal
                console.log(`diposit sucessfull , your current balance is ${this.bal}`);
            }
        }
        this.withdraw = function(amount){
            if(bal>0){
                let withdrawing = this.bal-amount
                this.bal = withdrawing
                console.log(`withdrawing succesfull , your current balance is ${this.bal}`);
            }else{
                console.log(`you have ${this.bal} in your account `);
            }
        }
        this.checkbal = function(){
            console.log(this.bal);
        }
    }

}

let max = new Bank('max',1000)
max.checkbal()
max.diposit(200)
max.withdraw(300)
max.checkbal()