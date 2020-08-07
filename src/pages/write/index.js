import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Login extends Component{
    render(){
        const { hasLogin } = this.props
        if(hasLogin){
            return <div>这里是需要登录态的写文章页面</div>
        }else{
            return <Redirect to="/login"/>
        }
        
    }
};

const mapStateToProps = (state)=>{
    return{
        hasLogin:state.getIn(['login','hasLogin'])
    }
};

export default connect(mapStateToProps,null)(Login);