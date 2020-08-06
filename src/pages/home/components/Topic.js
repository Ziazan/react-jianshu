import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    TopicWrapper,
    TopicItem
} from './../style'
class Topic extends PureComponent{

    render(){
        const {topicList} = this.props
        return (
            <TopicWrapper>
                {
                    topicList.map((item)=>(
                        <Link key={item.get("id")} to="/detail">
                             <TopicItem key={item.get('id')}>
                                <img className="topic-pic" src={item.get('imgUrl')} alt={item.get('title')}/>
                                {item.get('title')}
                            </TopicItem>
                        </Link>
                    ))
                }
            </TopicWrapper>
        )
    }
}



const mapStateToProps = (state)=>{
    return {
        topicList:state.getIn(['home','topicList']),
    }
}

const mapDispatchToProps = ()=>{
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic)