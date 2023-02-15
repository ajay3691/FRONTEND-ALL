class Acccount{
    min_Bal=5000
    constructor(id,name){
        console.log("parent Class - const ie Account const")
        this.id = id
        this.name = name
    }
}


class Saving_Account extends Acccount{
    constructor(id,name,amount){
        super(id,name)                              // super methos..use  parent methid..id..name
        console.log("Child Class - const ie Saving acoount const") 
        this.amount = amount

    }
    get_Bal (){
        return this.amount - this.min_Bal
    }
}
let c1 = new Saving_Account(101,"Narasimha",50000)
console.log(c1.get_Bal())



class Current_Account extends Acccount{ 
    min_Bal = 25000
    constructor(id,name,amount){
        super(id,name)
        this.amount = amount
    }
    get_Bal (){
        return this.amount - this.min_Bal
    }
}
let c2 = new Current_Account(102,"Jai",60000)
console.log(c2.get_Bal())