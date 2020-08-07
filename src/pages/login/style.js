import styled from 'styled-components'

export const LoginWrapper = styled.div`
    z-index:0;
    position:absolute;
    top:56px;
    left:0;
    right:0;
    bottom:0;
    background-color:#f1f1f1;
`
export const LoginBlock = styled.div`
    position:relative;
    width:400px;
    padding:50px 30px;
    margin-top:-200px;
    margin-left:-200px;
    top:50%;
    left:50%;
    border:1px solid #ccc;
    border-radius:5px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    background-color:#fff;
    
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    box-sizing:border-box;
    padding: 4px 12px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    &.pre-input{
        border-bottom:none;
        border-radius:4px 4px 0 0 ;
    }
`
export const Button = styled.div`
    height:30px;
    line-height:30px;
    margin-top:20px;
    background-color:#3194d0;
    padding: 9px 18px;
    font-size: 18px;
    border-radius: 25px;
    color:#fff;
    text-align:center;
`