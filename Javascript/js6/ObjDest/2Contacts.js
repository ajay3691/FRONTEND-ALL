let state = {
    id: 101,
    message: "Hellow GM",
    loc: ["Banglire", "USA", "AP"],
    emp:{id: 101, name:"rahul"}
}
//console.log(state.message)

let { message } = state
console.log(message)
  
console.log(state.emp.name)

/* 1.Object Destructcuring
   2.reading object properties as varible
   3.weare destructring the object, based on the requirment
   4.readabulity
 
 */