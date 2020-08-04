import React, { Component } from 'react'
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
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">发现</NavItem>
                    <NavItem className="left">关注</NavItem>
                    <NavItem className="left">消息</NavItem>
                    <NavItem className="left search">
                        <NavSearch className="left" />
                        <i className="iconfont">&#xe614;</i>
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
}

export default Header