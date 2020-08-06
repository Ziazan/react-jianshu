
import React, { PureComponent } from 'react'
import {
    WriterWrapper,
    WriterHeader,
    WriterSwitch,
    WriterList,
    WriterItem
} from '../style'

class Writers extends PureComponent{
    render(){
        return (
            <WriterWrapper>
                <WriterHeader>
                    推荐作者
                    <WriterSwitch>
                    <i ref={(icon) =>{this.spinIcon = icon}} className="iconfont spin"> &#xe851;</i>
                        换一批
                    </WriterSwitch>
                </WriterHeader>
                <WriterList>
                    {
                        [1,2,3,5,6,7,8,9].map(item =>{
                            return (
                                <WriterItem key={item}>
                                    <img  className="avatar" src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/48/h/48" alt="" />
                                    <i className="iconfont follow"> &#xe851;</i>
                                    <span className="name">日记</span>
                                    <p className="desc">写了1059.2k字 · 4.4k喜欢</p>
                                </WriterItem>
                            )
                        })
                    }
                </WriterList>
            </WriterWrapper>
        )
    }
}

export default Writers