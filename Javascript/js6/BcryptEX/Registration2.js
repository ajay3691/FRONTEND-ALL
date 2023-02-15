const bcrypt = require('bcryptjs')     //Es 5
// import bcrypt from 'bcryptjs'       // ES 6

let user = { name: "Rahul", email: "rahul@gmail.com", password: "apple5", cc: '1234567890' }
let salt = bcrypt.genSaltSync(10)           // salt method 0 to 10

let newPassword = bcrypt.hashSync(user.password, salt)
let newCC = bcrypt.hashSync(user.cc, salt);

/* console.log(newcc)
console.log(newPassword) */

let new_user = {...user,password:newPassword, cc:newCC}
console.log(user)
console.log(new_user)

// true or false new  and entering password
let flag = bcrypt.compareSync("apple5", new_user.password)
if(flag){
    console.log("Login Sucessful")
}
else {
    console.log("Login Faild")
}
//console.log(flag)