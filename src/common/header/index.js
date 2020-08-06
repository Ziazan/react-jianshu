import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import * as constants from './store/constants'
import { Link } from 'react-router-dom'

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
    componentDidMount(){
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
                            onClick={()=>{handleChangePage(pageNum,total,this.spinIcon)}}
                        >
                        <i ref={(icon) =>{this.spinIcon = icon}} className="iconfont spin"> &#xe851;</i>
                    换一批</SearchSwitch>
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
        const {focused, handleFocus, handleBlur, } = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                
                <Nav>
                    <NavItem className="left active">发现</NavItem>
                    <NavItem className="left">关注</NavItem>
                    <NavItem className="left">消息</NavItem>
                    
                    <NavItem className="left search">
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames="slide"
                            >
                            <NavSearch
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className={focused?'left focused':'left'}
                            />
                        </CSSTransition>
                             <i className={focused?'iconfont focused zoom':'iconfont zoom'}>
                                &#xe614;
                            </i>
                        {this.getListArea(focused)}
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
            dispatch(actionCreators.setFocuse(true))
        },
        handleBlur:()=>{
            dispatch(actionCreators.setFocuse(false))
        },
        handleMouseEvent:(isMouseIn)=>{
            dispatch(actionCreators.updateMouseIn(isMouseIn))
        },
        getSearchList:()=>{
            dispatch(actionCreators.getSearchList())
        },
        handleChangePage:(pageNum, total, spin)=>{
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0;   
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
            if(pageNum < total){
                dispatch(actionCreators.changePage(pageNum + 1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)