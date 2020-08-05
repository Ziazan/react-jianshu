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

## redux-immutable