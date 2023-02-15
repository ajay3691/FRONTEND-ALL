//function   ...** function to class
import CompB from './CompB'
let CompA = () => {
    let msg = "Good Morning"
    let emp_Details = {
        emp_Id: 101,
        emp_Sal: 25000
    }
    users = [{ id: 101, name: "Rahul Gandhi", sal: 45000 },
    { id: 102, name: "Sonia Gandhi", sal: 55000 }]

    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB message={msg} details={emp_Details} />
    </div>
}


export default CompA