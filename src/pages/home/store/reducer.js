import { fromJS } from 'immutable'
// import * as constants from './constants'

const defaultState = fromJS({
    topicList:[{
        "id": 1,
        "title": "社会热点",
        "imgUrl": "//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }, {
        "id": 2,
        "title": "手手绘",
        "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }],
    articleList:[{
        "id": 1,
        "title": "胡歌12年后首谈车祸",
        "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
        "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        "id": 2,
        "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
        "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
        "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }, {
        "id": 3,
        "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
        "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
        "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }],
    recommendList: [{
        "id": 1,
        "imgUrl": "//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/280/h/50"
    }, {
        "id": 2,
        "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/280/h/50"
    },{
        "id": 3,
        "imgUrl": "//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/280/h/50"
    }, {
        "id": 4,
        "imgUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/280/h/50"
    }]
})

export default (state = defaultState,action)=>{
    switch(action.type){
        default:
            return state
    }
    
}