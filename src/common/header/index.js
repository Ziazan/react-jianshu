import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style'


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            focused:false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">发现</NavItem>
                    <NavItem className="left">关注</NavItem>
                    <NavItem className="left">消息</NavItem>
                    
                    <NavItem className="left search">
                    <CSSTransition
                            timeout={200}
                            in={this.state.focused}
                            classNames="slide"
                            >
                            <NavSearch
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                                className={this.state.focused?'left focused':'left'}
                            />
                             </CSSTransition>
                             <i className={this.state.focused?'iconfont focused':'iconfont'}>
                                &#xe614;
                            </i>
                    </NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    
                    <NavItem className="right">登录</NavItem>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className="register">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    handleFocus(){
        this.setState({
            focused:true
        })
    }

    handleBlur(){
        this.setState({
            focused:false
        })
    }
}

export default Header