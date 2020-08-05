import * as constants from './constants'

export const setFocuse = (isFocused)=>{
    return{
        type:constants.UPDATE_FOCUS,
        isFocused
    }
}