class Address {
    constructor(hno, area, city, state){
        console.log('Addreass class constructor')
        this.hno = hno
        this.area = area
        this.city = city
        this.state = state
    }
   update_Address(){ }
}
class Saving_Account{
    constructor(acc_id,acc_name,amount,address){
        console.log('Saving class constructor')
        this.acc_id = acc_id
        this.acc_name = acc_name
        this.amount = amount
        this.address = address
    }
 }
let c1 = new Saving_Account(101,"narasim",10000, new Address(96,"marathalli","bengalore","kA"))
console.log(c1)

//class Current_Account { }
module.exports = Address