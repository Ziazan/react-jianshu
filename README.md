[TOC]
## 样式组件获取dom
使用innerRef 获取 StyleComponents的 真实dom
新版本不需要使用innerRef了。这里使用 ref 就可以

## 路由重定向
路由重定向回首页
<Redirect to='/'>

## 路由数据传递
### 第一种：动态路由
`to="/detail/:id"`
这样才能匹配 `/detail/1`
在当前页面可以使用：`this.props.match.params.id`获取上一个页面传过来的参数。

### 第二种：url参数
`to="/detail"`

跳转的url `/detail?id=1`
this.props.location.search : ?id=1
这里需要解析字符串获得参数



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


## 异步组件
```javascript
npm install -D react-loadable
```

使用文档里的范例
```javascript
 import Loadable from 'react-loadable';
 import Loading from './my-loading-component';
 
 const LoadableComponent = Loadable({
 
     loader: () => import('./my-component'),
 
     loading: Loading,
 
 });
 
 export default class App extends React.Component {
 
     render() {
 
         return <LoadableComponent/>;
 
}}
```

我的代码修改过后：
在`/detail` 目录下 新增 `loadable.js`
```javascript
import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading: ()=>(<div>正在加载...</div>),
});
export default ()=>{
    return <LoadableComponent/>;
}
```

`App.js`文件中:
```javascript
import Detail from './pages/detail'
```
Detail 组件的引入，修改为：
```javascript
import Detail from './pages/detail/loadable'
```
这样在访问`localhost:3000/detail/1`时回显示加载中，当组件文件加载好之后，即可显示detail页面

### 使用`withRouter`
此时这句`this.props.match.params.id` 会报：` Cannot read property 'params' of undefined`

这里时因为 App.js 中的路由到 了 loadable 此时 Detail 组件无法获取到路由信息。
解决办法：使用`withRouter`
`withRouter` 能够让组件获取到完整的路由信息