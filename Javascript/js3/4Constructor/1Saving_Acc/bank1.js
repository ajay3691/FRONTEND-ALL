class Saving_Account {
    min_Bal = 500

    open_Account(){
        console.log("Account opend succesfully")
        console.log("your min Balence is :", this.min_Bal)
    }
}
let c1 = new Saving_Account(101, "Rahul Gandhi",5000)
c1.open_Account()