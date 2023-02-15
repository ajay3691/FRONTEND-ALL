class Account{
    open_Account(){
        console.log("Acccount opend Succesfully")
    }
}


class Saving_Account extends Account {          // inhertence..parent property to child class**extends
     deposit(){
        console.log("Amount Deposited")
     }
 }                
let c1 = new Saving_Account()               
c1.open_Account()
c1.deposit()


class CC_Account {                                      // 3r class
 
}
//let c1 = new Saving_Account().open_Account()