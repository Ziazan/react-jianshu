import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    ListItem,
    ListInfo
} from '../style'
class List extends Component{
    render(){
        const { list } = this.props
        
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get("id")}>
                                <img className="pic" src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="" />
                                <ListInfo>
                        <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
    }
}
const mapDispatchToProps = ()=>{
    return {}
}



export default connect(mapStateToProps,mapDispatchToProps)(List)