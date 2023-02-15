class Account {                        // class
    min_bal = 500                      // properties
   /*  name =""
    acc_Id */

    constructor(acc_Id,name,c){
        this.acc_Id = acc_Id
        this.name =  name
        this.salary =  c
    }
}
let c1 = new Account(101,"Rahul Gandhi",1000)   // obect created
let c2 = new Account(102,"Sonia Gandhi",2000)
console.log(c1)
console.log(c2)