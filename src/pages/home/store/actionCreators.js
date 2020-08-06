import axios from 'axios'
import { fromJS } from 'immutable'
import {
    constants,
}  from './index'

const addArticleList = (list,nextPage)=>{
    return {
        type:constants.ADD_ARTICLE_LIST,
        list:fromJS(list),
        nextPage
    }
}

export const getHomeData = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
        .then(res => {
            res = res.data;
            const action = {
                type:constants.CHANGE_HOME_DATA,
                data:fromJS(res.data)
            }
            dispatch(action)
        })
        .catch(err => {
            console.error('err')
        })
    }
}

export const getLoadMore = (page) =>{
    return (dispatch) => {
        axios.get('/api/articleList.json?page=' + (page+1))
        .then(res => {
            res = res.data;
            dispatch(addArticleList(res.list,page+1))
        })
        .catch(err => {
            console.error('err')
        })
    }
}