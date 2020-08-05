import { UPDATE_FOCUS } from './actionTypes'

const defaultState = {
    focused:false,
}
export default (state = defaultState,action) => {
    if(action.type === UPDATE_FOCUS){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = action.isFocused;
        return newState
    }
    return state
}