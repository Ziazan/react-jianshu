import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
class List extends PureComponent{
    render(){
        const { list,articlePage,handleLoadMore } = this.props
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link key={item.get("id")} to="/detail">
                                <ListItem>
                                    <img className="pic" src={item.get("imgUrl")} alt="" />
                                    <ListInfo>
                            <h3 className="title">{item.get("title")}</h3>
                                        <p className="desc">{item.get("desc")}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
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