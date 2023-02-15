/* let IDs = [11,12,13,14]

IDs.map((number) => {
    console.log(number)
}) */


let IDs = [11,12,13,14]

let new_Numbers = IDs.map((number) => {
    //console.log(number)
    let x = number + 100
    return x
})
console.log(new_Numbers)



