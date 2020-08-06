import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import * as constants from './store/constants'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchHeader,
    SearchSwitch,
    SearchList,
    SearchItem,
    Addition,
    Button
} from './style'

class Header extends Component {
    
    componentWillMount(){
        this.props.getSearchList();
    }
    getListArea(show){
        let pageList = [];
        const { pageNum, total, list, mouseIn,handleMouseEvent,handleChangePage} = this.props;
        const newList = list.toJS()
        if(newList.length){
            for(let i = (pageNum - 1) * constants.PAGE_SIZE; i < Math.min(pageNum * constants.PAGE_SIZE,newList.length); i++){
                pageList.push(
                    <SearchItem key={newList[i]}>{newList[i]}</SearchItem>
                )
            }
        }
        if(show || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={()=>{handleMouseEvent(true)}}
                    onMouseLeave={()=>{handleMouseEvent(false)}}>
                    <SearchHeader>
                        热门搜索
                        <SearchSwitch 
                            onClick={()=>{handleChangePage(pageNum,total)}}
                        >换一批</SearchSwitch>
                    </SearchHeader>
                    <SearchList>
                        {pageList}
                    </SearchList>
                </SearchInfo>
            )
        }else{
            return null
        }
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
                        {this.getListArea(this.props.focused)}
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
        mouseIn:state.getIn(['header','mouseIn']),
        list:state.getIn(['header','list']),
        pageNum:state.getIn(['header','pageNum']),
        total:state.getIn(['header','total']),
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
        },
        handleMouseEvent:(isMouseIn)=>{
            const action = actionCreators.updateMouseIn(isMouseIn)
            dispatch(action)
        },
        getSearchList:()=>{
            const action = actionCreators.getSearchList()
            dispatch(action)
        },
        handleChangePage:(pageNum, total)=>{
            if(pageNum < total){
                dispatch(actionCreators.changePage(pageNum + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)