let emp = { 101: 101, name: "rahul", sal: 45000 }
console.log(Object.keys(emp))        // checking Obj keys ..conver..obj arry

if(Object.keys(emp).length == 3){    //converting Obj to Arry..next checking Empty or not
    console.log("Empty Object")
}
else {
    console.log("Not Empty Object")
}