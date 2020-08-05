import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    focused:false,
})
export default (state = defaultState,action) => {
    if(action.type === constants.UPDATE_FOCUS){
        return state.set('focused',action.isFocused)
    }
    return state
}