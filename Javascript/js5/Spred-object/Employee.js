/*  Array allowd duplicates....Object didnt Allowed duplicate keys
    thats why email is Overide     */
let user = { id: 101, name: "Rahul Ghandi", email: "rahul@gmail.com" }

let deatils = { email: "rahul@tcs.com", address: "waynad", salory: 45000 }

let user_Deatils = {...user, ...deatils}
console.log(user_Deatils)