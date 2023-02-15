/* class Parent {
    get_Toatl_Assests(){
        console.log("10 CR")
    }
}
class Child extends Parent {
    get_Toatl_Assests(){
        console.log("15 CR")
    }
}
let c = new Child()
c.get_Toatl_Assests()                           // overiding
 */


class Parent {
    get_Toatl_Assests(){
        console.log("10 CR")
    }
}

class Child extends Parent {
    
    get_Details(){
        super.get_Toatl_Assests()
    }
    get_Toatl_Assests(){
        console.log("15 CR")
    }
}
let c = new Child()
c.get_Details()
c.get_Toatl_Assests()



/* class Parent {
    get_Toatl_Assests(){
        console.log("10 CR")
    }
}
class Child extends Parent {
    get_Details(){
        console.log("15 CR")
    }
}
let c = new Child()
c.get_Toatl_Assests()
c.get_Details() */

