import { UPDATE_FOCUS } from './actionTypes'

export const setFocuse = (isFocused)=>{
    return{
        type:UPDATE_FOCUS,
        isFocused
    }
}