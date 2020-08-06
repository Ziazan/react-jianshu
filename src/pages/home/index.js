import React, { Component } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writers from './components/Writers'
import {
    actionCreators
} from './store'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component{
    componentDidMount(){
        this.props.getHomeData();
        this.bindEvent();
     }
    
     componentWillUnmount(){
        window.removeEventListener('scroll')
     }
    render(){
        const { isScrollBtnShow } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writers />
                </HomeRight>
                {isScrollBtnShow ? <BackTop onClick={this.handleBackTop}>顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    handleBackTop(){
        window.scrollTo(0,0)
    }
    bindEvent(){
        window.addEventListener('scroll',(e)=>{
            if(document.documentElement.scrollTop > 100){
                this.props.toggleScrollShow(true)
            }else{
                this.props.toggleScrollShow(false)
            }
        })
    }

    
}

const mapState = (state)=>{
    return {
        isScrollBtnShow:state.getIn(['home','isScrollBtnShow'])
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getHomeData:()=>{
            dispatch(actionCreators.getHomeData())
        },
        toggleScrollShow:(isShow)=>{
            dispatch(actionCreators.setScrollStatus(isShow))
        }
    }
}

export default connect(mapState,mapDispatchToProps)(Home)