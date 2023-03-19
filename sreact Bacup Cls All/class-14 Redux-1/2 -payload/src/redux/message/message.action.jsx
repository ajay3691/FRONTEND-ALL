//action types 
const GM = "GM"
const GN = "GN"
//actions
let gmAction = () => {
    console.log("Test gmAction")
    // invoking the APi - data
    return { type: GM, payload:"Hello Api 100/-rs" }
}
let gnAction = () => {
    console.log("Test gnAction ")
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }
//What is action?
//action is function, it return actionable objects