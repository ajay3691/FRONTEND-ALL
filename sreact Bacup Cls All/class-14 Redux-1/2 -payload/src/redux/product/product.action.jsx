//Action Types
const INCR = "INCR"
const DECR = "DECR"
//Redux Actions
let incrAction = () => {
    return { type: INCR }
}
let decrAction = () => {
    return { type: DECR }
}
export { INCR, DECR, incrAction, decrAction }