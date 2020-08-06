import axios from 'axios'
import { fromJS } from 'immutable'
import {
    constants,
}  from './index'

const addArticleList = (list,nextPage)=>{
    return {
        type:constants.ADD_ARTICLE_LIST,
        list:fromJS(list),
        articlePage:nextPage
    }
}

export const getHomeData = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
        .then(res => {
            res = res.data;
            let data = res.data;
            const action = {
                type:constants.CHANGE_HOME_DATA,
                topicList:fromJS(data.topicList),
                articleList:fromJS(data.articleList),
                recommendList:fromJS(data.recommendList)
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
        axios.get('/api/articleList.json?page=' + page)
        .then(res => {
            res = res.data;
            dispatch(addArticleList(res.list,page))
        })
        .catch(err => {
            console.error('err')
        })
    }
}

export const setScrollStatus = (isShow)=>{
    return {
        type:constants.TOGGLE_SCROLL_TOP,
        isScrollBtnShow:isShow
    }
}