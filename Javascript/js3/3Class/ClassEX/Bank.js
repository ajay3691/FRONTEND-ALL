class Saving_Account {                            //***** * class is a Template
    min_Bal = 500

    open_Account() {
        console.log("Account opend Succesfully")   // methods
    }
    deposit() {                                    //  all methods ...are class members
        console.log("Ammount Deposited")
    }                                
    withdraw() { 
        console.log('Amount Withdrawl')
     }
    getStatement() {
        console.log('Statement')
     }
    getBal() { }
    close_Account() { }

}

let c1 = new Saving_Account()                     //***** * class constrct ..Object
let c2 = new Saving_Account()                                              //object 
console.log(c2)                                   // min_Bal = 500
console.log(c1.min_Bal)                           // 500           

c1.open_Account()                                  // using Object can acces class members & methods
c1.deposit()                                  // using Object can acces class members & methods
c1.withdraw()                                  // using Object can acces class members & methods

