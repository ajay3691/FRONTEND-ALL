const Address = require('./Bank')
class Credit_card {
    constructor(cc_ID,cc_Name,address){
        this.cc_ID = cc_ID
        this.cc_Name = cc_Name
        this.address= address
    }

}
let cc1 = new Credit_card('c101',"Narasimha", new Address(69,"Marathhalli", "Banglore", "KA"))
console.log(cc1)