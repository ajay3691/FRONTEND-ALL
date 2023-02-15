class Saving_Account {
    constructor(){                // constructor method
            console.log("Const excuting automitically")
     }                        

    open_Account(){
        console.log("Account opend succesfully")
    }
}
let c1 = new Saving_Account(101, "Rahul Gandhi",5000)
let c2 = new Saving_Account( "Rahul Gandhi",6000)
c1.open_Account()