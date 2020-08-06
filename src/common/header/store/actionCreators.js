import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const _changeList = (list)=>{
    return{
        type:constants.INIT_SEARCH_LIST,
        list:fromJS(list),
        total:Math.ceil(list.length/constants.PAGE_SIZE)
    }
}

export const setFocuse = (isFocused)=>{
    return{
        type:constants.UPDATE_FOCUS,
        isFocused
    }
}

export const updateMouseIn = (mouseIn)=>{
    return{
        type:constants.UPDATE_MOUSEIN,
        mouseIn
    }
}

/**
 * 请求搜索建议列表
 */
export const getSearchList = ()=>{
    return (dispatch)=>{
       axios.get('/api/list.json')
       .then(res =>{
        res = res.data;
        if(res.errcode === 0){
            dispatch(_changeList(res.data))
        }
       })
       .catch(err =>{
           console.error(err)
       })
    }
}

export const changePage = (pageNum) =>{
    return {
        type:constants.CHANGE_PAGE_NUM,
        pageNum
    }
}