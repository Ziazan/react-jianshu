import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    pageNum:1,
    total:1,
})
export default (state = defaultState,action) => {
    if(action.type === constants.UPDATE_FOCUS){
        return state.set('focused',action.isFocused)
    }else if(action.type === constants.UPDATE_MOUSEIN){
        return state.set('mouseIn',action.mouseIn)
    }else if(action.type === constants.INIT_SEARCH_LIST){
        return state.merge({
            list: action.list,
            total: action.total
        })
    }else if(action.type === constants.CHANGE_PAGE_NUM){
        return state.set('pageNum',action.pageNum)
    }
    return state
}