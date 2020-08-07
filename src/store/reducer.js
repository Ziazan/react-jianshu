import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as HomeReducer} from '../pages/home/store'
import {reducer as LoginReducer} from '../pages/login/store'

const reducer  = combineReducers({
    header:headerReducer,
    home:HomeReducer,
    login:LoginReducer
})

export default reducer;