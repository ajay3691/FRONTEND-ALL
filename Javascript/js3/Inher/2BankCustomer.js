class Customer{
    constructor(){
        console.log("Parent Class Constructor")
    }
    get_Address(){
        console.log("Address Method")
    }
}

/* let c2 = new Customer()                         // using new keyword..creat Object
c2.get_Address()
 */

class Saving_Account extends Customer{            //  constructor is a method...to incilize the object value
    constructor (){                               // child class..constructor 
        super()                                   // super**to invoke parent class const
        console.log("Child Class constructor")
    }
 }
 let c1 = new Saving_Account()                    // using new keyword..creat Object
 c1.get_Address()



