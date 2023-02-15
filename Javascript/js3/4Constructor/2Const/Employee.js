class Employee {
    constructor(emp_Id,ename,email){
        this.emp_Id = emp_Id
        this.ename = ename
        this.email =email
    }
    getEmployee_Details (){
        console.log(`Employee Id ${this.emp_Id} and Name : ${this.ename}`)
    }
}
let e1 = new Employee(101, "Rahul", "Rahul@gmail.com")
let e2 = new Employee(102, "Sonia", "Sonia@gmail.com")
console.log(e1)
console.log(e2)

e1.getEmployee_Details()
e2.getEmployee_Details()