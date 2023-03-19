// reducer is a pure function , it will take two args is state , action
import { INCR, DECR } from './product.action'
let intialState = {
    name: "Apple 12",
    image: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662424479/Croma%20Assets/Communication/Mobiles/Images/229927_cg7jzk.png/mxw_2048,s_webp,f_auto",
    price: 4500,
    qty: 1
}
let productReducer = (state = intialState, action) => {
    console.log(action);
    console.log(action.type)
    switch (action.type) {
        case INCR:
            return { ...state, qty: state.qty + 1 }
        case DECR:
            return { ...state, qty: state.qty - 1 }
        default:
            return state
    }
}

export { productReducer }