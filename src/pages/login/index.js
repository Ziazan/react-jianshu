import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    actionCreators
} from './store'
import { 
    LoginWrapper,
    LoginBlock,
    Input,
    Button
} from './style.js'

class Login extends Component{
    render(){
        const { hasLogin,handleLogin } = this.props
        if(!hasLogin){
            return (
                <LoginWrapper>
                    <LoginBlock>
                       <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                       <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                       <Button onClick={() => handleLogin(this.account, this.password)}>登陆</Button>
                    </LoginBlock>
                </LoginWrapper>
               )
        }else{
            return <Redirect to="/"/>
        }
        
    }
}
const mapStateToProps = (state)=>{
    return{
        hasLogin:state.getIn(['login','hasLogin'])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        handleLogin:(accountElem, passwordElem)=>{
            console.log('handleLogin',accountElem.value,passwordElem.value)
            dispatch(actionCreators.doLogin(accountElem.value,passwordElem.value))
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)