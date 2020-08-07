import axios from 'axios';
import * as constants from './constants'

const changLogin = (value)=>({
    type:constants.CHANGE_LOGIN,
    hasLogin:value
})

export const doLogin = (account, password)=>{
    return (dispatch)=>{
        axios.get(`/api/login.json?account=${account}&password=${password}`)
        .then( res =>{
            dispatch(changLogin(true))
        })
        .catch(err =>{
            console.error(err)
        })
    }
}

export const doLogout = ()=>{
    return (dispatch)=>{
        axios.get('/api/logout.json')
        .then( res =>{
            dispatch(changLogin(false))
        })
        .catch(err =>{
            console.error(err)
        })
    }
}