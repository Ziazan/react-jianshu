import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import axios from 'axios'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writers from './components/Writers'
import * as constants from './store/constants'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component{
    render(){
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
            </HomeWrapper>
        )
    }

    componentDidMount(){
       this.props.getHomeData();
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getHomeData:()=>{
            axios.get('/api/home.json')
            .then(res => {
                res = res.data;
                const action = {
                    type:constants.CHANGE_HOME_DATA,
                    data:fromJS(res.data)
                }
                dispatch(action)
                console.log(res.data)
            })
            .catch(err => {
                console.error('err')
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(Home)