import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList: [],
    articlePage:1,
    isScrollBtnShow:false,
})

export default (state = defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:action.topicList,
                articleList:action.articleList,
                recommendList:action.recommendList
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                articlePage:action.articlePage
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('isScrollBtnShow',action.isScrollBtnShow)
        default:
            return state
    }
    
}