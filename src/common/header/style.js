import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    height: 56px;
    min-width: 1200px;
    max-width: 1440px;
    margin: 0 auto;
    transition: transform .3s cubic-bezier(.645,.045,.355,1)
    position:relative;
    box-shadow: 0 2px 10px rgba(0,0,0,.05)
`

export const Logo = styled.a.attrs({
    href:'/'
})`
    display:inline-block;
    float: left;
    margin: 0 30px;
    width: 100px;
    height: 56px;
    background: url(${LogoPic});
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    color:#333;
    cursor:pointer;
    &.left{
        float:left;
    }

    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    &.search{
        position:relative;
        .zoom{
            position:absolute;
            right:23px;
            bottom:13px;
            width:30px;
            line-height:30px;
            border-radius:15px;
            text-align:center;
            &.focused{
                background-color:#777;
                color:#fff;
            }
        }
        
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top:9px;
    padding:0 35px 0 20px;
    box-sizing:border-box;
    line-height:56px;
    border:none;
    outline:none;
    border-radius:19px;
    background-color:#eee;
    font-size:14px;
    color:#666;

    &::placeholder{
        color:#999;
    }

    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const SearchInfo = styled.div`
    z-index:1;
    position:absolute;
    top:66px;
    width:240px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    padding:10px;
    background-color:#fff;
`
export const SearchHeader = styled.div`
   margin-bottom:10px;
   font-size:14px;
   line-height:24px;
   color:#999
`
export const SearchSwitch = styled.a`
    font-size:13px;
    float:right;
    &:hover{
        color:#333
    }
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .3s ease-in;
        transform:rotate(80deg)
        transform-origin:center center;
    }
`
export const SearchList = styled.div`
    overflow:hidden;
`
export const SearchItem = styled.a`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
    font-size:13px;
    line-height:20px;
    padding:0 10px;
    border:1px solid #ddd;
    border-radius:5px;
    &:hover{
        border-color:#ec6149;
        color:#ec6149;
    }
    
`

//右侧附加内容
export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`

export const Button = styled.div`
    float:right;
    margin-top:14px;
    margin-right:20px;
    padding:0 20px;
    line-height:28px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.register{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background-color: #ea6f5a;
    }
    
`