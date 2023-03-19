import { combineReducers } from "redux";
import { productReducer} from './product/product.reducer'
import {messageReducer} from './message/message.reducer'
let rootReducer = combineReducers({ product:productReducer, message:messageReducer })
export { rootReducer , messageReducer} 