import axios from 'axios'
import { fromJS } from 'immutable'
import {
    constants,
}  from './index'


export const getHomeData = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
        .then(res => {
            res = res.data;
            const action = {
                type:constants.CHANGE_HOME_DATA,
                data:fromJS(res.data)
            }
            dispatch(action)
        })
        .catch(err => {
            console.error('err')
        })
    }
    

}