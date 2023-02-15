let num1 = [35,3,6,36]

num1.forEach(() => {
    console.log("Hello GM")   /// for each method array and excute function n of time array length
}) 

let nums = [35,3,6,36]

nums.forEach((mark) => {
    console.log(mark)
})
//Map method iterate your arry and excute function n times n=Array lenth

let marks = [35,3,6,36]               

let x = marks.map((mark) => {       // map method +2
        return mark + 2
})
console.log(x)


let size = [28,30,32,34,36,38]    // map method +1

let ab = size.map((size1) => {
    return size1 + 1
})
console.log(ab)