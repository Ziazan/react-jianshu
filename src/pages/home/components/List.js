import React, { Component } from 'react'
import {connect} from 'react-redux'
import { actionCreators } from '../store'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
class List extends Component{
    render(){
        const { list,articlePage,handleLoadMore } = this.props
        console.log('articlePage',articlePage)
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get("id")}>
                                <img className="pic" src={item.get("imgUrl")} alt="" />
                                <ListInfo>
                        <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
                <LoadMore onClick={()=>{handleLoadMore(articlePage)}}>加载更多...</LoadMore>
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        articlePage:state.getIn(['home', 'articlePage']),
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleLoadMore:(page)=>{
            dispatch(actionCreators.getLoadMore(page + 1))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)