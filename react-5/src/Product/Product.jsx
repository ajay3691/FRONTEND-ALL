import React from 'react'
import{useDispatch,useSelector}from 'react-redux'
import { incrAction, decrAction } from "../redux/product/product.action"
const Product = () => {
    let dispatch = useDispatch ()
    let product= useSelector ((state)=>{
        return state.product
    })
/*     let product = {
        name: "Apple 12",
        image: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662424479/Croma%20Assets/Communication/Mobiles/Images/229927_cg7jzk.png/mxw_2048,s_webp,f_auto",
        price: 4500,
        qty: 1
    } */
    let decrHandler = () => {
        dispatch(decrAction())
    }
    let incrHandler = () => {
        dispatch(incrAction())
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className='table table-hover mt-5'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td><img src={product.image} alt="" height='80px' /> </td>
                                    <td>{product.price}</td>
                                    <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
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
