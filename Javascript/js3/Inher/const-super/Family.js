class parent{
    money = '10 cr'
    get_Qualities(){
        console.log("Prrent  has a good Qualityies")
    }

}

class Child extends parent { }
//console.log(new Child().get_Qualities())
let c1 = new Child()
console.log(c1.money)
c1.get_Qualities()



class Child2 extends parent{}
let c2 = new Child2()
console.log(c2.money)
