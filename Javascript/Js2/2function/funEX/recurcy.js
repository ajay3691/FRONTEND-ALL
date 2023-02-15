/* function karna() {
    console.log("friendship")
    karna()
}
karna() */

var i = 1
function karna() {
    console.log("friendship",i )
    i++
    karna()
}
karna()