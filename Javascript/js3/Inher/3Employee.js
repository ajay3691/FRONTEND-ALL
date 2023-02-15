class Employee {
    /* eid
    ename
    esal */
    constructor(id,name,salory){                 // inside the class using..this..keyword
        this.eid = id
        this.ename = name
        this.esal  = salory
    }

    get_Details(){
        console.log("Employee Name:", this.ename)
    }
}
let e1 = new Employee (101,'Rahul Gandhi',2000)       //out side the class using new ..e1 object like that
let e2 = new Employee (102,'Sonia Gandhi',3000)
//console.log(e2.esal)
e1.get_Details()
e2.get_Details()