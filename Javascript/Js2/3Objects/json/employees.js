let employees = [{ id: 101, name: 'rahul', sal: 4500, loc: 'noida' },
{ id: 102, name: 'sonia', sal: 5500 },
{ id: 102, name: 'priya', sal: 6500 },]
// print employee Names
/* for (emp of employees){
    console.log(emp.sal)
} */
for (var i = 0; i <= employees.length - 1; i = i + 1) {
    console.log(employees[i].name)
}