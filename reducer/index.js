import { combineReducers } from 'redux'
import reducer from './reducer'
import reducer2 from './reducer2'


const RootReducer = combineReducers({
    back: reducer,
    name: reducer2
})

export default RootReducer