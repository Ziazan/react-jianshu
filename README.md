## redux-immutable
`redux-immutable` 把state的取值统一



```javascript
const mapStateToProps = (state)=>{
    return {
        focused:state.header.get('focused'),
    }
}
```
`state.header`和 `state.header.get()`数据获取的方式不统一
```
npm install -D redux-immutable
```
在`store/reducers.js`
```javascript
// import { combineReducers } from 'redux'
// 修改为
import { combineReducers } from 'redux-immutable'
```

在 `header/index.js`
```javascript
const mapStateToProps = (state)=>{
    return {
        // focused:state.header.get('focused'),
        //修改为：
        // focused:state.get('header').get('focused'),
        //等价于：
        focused:state.getIn(['header','focused']),
    }
}
```
---
## immutable

```
npm install immutable -D
```

使用 `immutable`库 将JS对象转换为immutable对象

```javascript
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused:false,
})
```

### 使用set()设置state的值:
immutable 对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
```javascript
export default (state = defaultState,action) => {
    if(action.type === constants.UPDATE_FOCUS){
        return state.set('focused',action.isFocused)
    }
    return state
}
```
### 使用get()获取state的值:
```javascript
const mapStateToProps = (state)=>{
    return {
        focused:state.header.get('focused'),
    }
}
```

