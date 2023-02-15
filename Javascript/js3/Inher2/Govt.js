class Govt {
    tax = 18
    get_Discount(){
        console.log("Discount Avalible - centarl")
    }

}

class KA_Govt extends Govt {
    tax = 18
    tax = 15                       // tax tax same thats y..its overide
    /* get_Discount(){
        console.log("Discount Avalible - State")
    } */
}

let s1 = new KA_Govt()
console.log(s1)
console.log(s1.tax)
s1.get_Discount()