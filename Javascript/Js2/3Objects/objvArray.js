let size =['s','m','l','xl']
let product = {
    id :'p100',
    name:'Iphone 15',
    price: 1200,
    color:'Gold'
}
/* console.log(size[10])          //undifined
console.log(product.discount) */  //undifined

console.log(size[3])          // xl
console.log(product.name)     // 'Iphone 15'

for (product in size) {
    console.log(size[product])
}

//console.log(size)
