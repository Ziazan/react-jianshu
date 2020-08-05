import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

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
                    <CSSTransition
                            timeout={200}
                            in={this.props.focused}
                            classNames="slide"
                            >
                            <NavSearch
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                                className={this.props.focused?'left focused':'left'}
                            />
                             </CSSTransition>
                             <i className={this.props.focused?'iconfont focused':'iconfont'}>
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
}
const mapStateToProps = (state)=>{
    return {
        focused:state.getIn(['header','focused']),
    }
}

const mapDispatchToProps =  (dispatch)=>{
    return {
        handleFocus:()=>{
            const action = actionCreators.setFocuse(true)
            dispatch(action)
        },
        handleBlur:()=>{
            const action = actionCreators.setFocuse(false)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)