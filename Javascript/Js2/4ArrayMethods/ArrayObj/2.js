let emp = { id: 101, name: 'Rahul', sal: 4500 }
// print all keys
//print all values

for (k in emp){
    console.log(k)
    console.log(emp[k])
}
console.log(Object.keys(emp))  // Obj convert to Array
