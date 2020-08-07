import React, { Component } from 'react'
import { 
    LoginWrapper,
    LoginBlock,
    Input,
    Button
} from './style.js'

class Login extends Component{

    render(){
        return (
         <LoginWrapper>
             <LoginBlock>
                 <Input className="pre-input" placeholder="账号"/>
                 <Input placeholder="密码"/>
                 <Button>登录</Button>
             </LoginBlock>
         </LoginWrapper>
        )
    }
}

export default Login