class Account {                        // class
    min_bal = 500                      // properties
  /*   name =""
    acc_Id
 */
    constructor(a,b,c){
        this.acc_Id = a
        this.name =  b
        this.village = c
    }
}
let c1 = new Account(101,"Rahul Gandhi",'kuppam')   // obect created
let c2 = new Account(102,"Sonia Gandhi","kangundi")
console.log(c1)
console.log(c2)