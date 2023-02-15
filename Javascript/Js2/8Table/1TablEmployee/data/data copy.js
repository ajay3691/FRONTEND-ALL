let employees = [{ id: 101, name: "Rahul Gandhi", email: "Rahul@.com" },
{ id: 102, name: "Sonia Gandhi", email: "soni@.com" },
{ id: 103, name: "Priyanka Gandhi", email: "priya@.com" }]



/* function displayData (){
    let a = document.getElementById("rajini").innerHTML="Good morning"
    //a.innerHTML = "Good Morning"
} */

function displayData() {
    let row = ""
    for (emp of employees) {
        row = row + `<tr> <td> ${emp.id} </td> 
                          <td> ${emp.name} </td> 
                          <td> ${emp.email} </td>
                     </tr>`
    }
    document.getElementById('rajini').innerHTML = row
}