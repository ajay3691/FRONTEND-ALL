import React, { useState } from 'react'

const Product = () => {
    let [product, setProduct] = useState({
        prod_Name: " I Phone 15s",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQIfpEn01QWWd3_h7LhNyRWGyApj-NvdVt2J6LgEjmXagmhdoUWKB78mtaY1J3-i3_k3ZMhgGHIaAY&usqp=CAc",
        price: 4999,
        qty: 1
    })

    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })  // ...product  spred operator ..if not add click the(+ -) all deatils hiding
    }
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className='table'>
                            <thead className='bg-warning text-white'>
                                <tr>
                                    <th>Product Name </th>
                                    <th>Image </th>
                                    <th>Price </th>
                                    <th>Qty </th>
                                    <th>Total </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.prod_Name}</td>
                                    <td> <img src={product.image} height='80px' alt="" /> </td>
                                    <td>{product.price}</td>
                                    <td> <i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty} <i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                                    <td>{product.qty * product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
