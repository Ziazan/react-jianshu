import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    
`
export const HomeLeft = styled.div`
    width:625px;
    float:left;
    margin-right:15px;
    margin-top:20px;
    .banner-img{
        width: 625px;
		height: 270px;
    }
`
export const HomeRight = styled.div`
    width:280px;
    float:left;
`;
export const BackTop = styled.div`
    position:fixed;
    width:50px;
    height:50px;
    line-height:50px;
    font-size:16px;
    text-align:center;
    right:50px;
    bottom:50px;
    color:#333;
    border:1px solid #ddd;
    border-radius:25px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float:left;
    height:32px;
    background-color:#f7f7f7;
    padding-right:18px;
    margin-left:10px;
    margin-bottom:18px;
    line-height:32px;
    font-size:13px;
    color:#333;
    border:1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom: 1px solid #dcdcdc;
    position: relative;
    overflow:hidden;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
    }
    h3.title{
        line-height:27px;
        font-size:18px;
        color:#333;
        font-weight:bold;
    }
    p.desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
    
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
`;

export const LoadMore = styled.div`
    width:100%;
    height:30px;
    line-height:30px;
    background-color:#999;
    color:#fff;
    font-size:14px;
    text-align:center;
    border-radius:15px;
    margin-top:10px;
    cursor:pointer;
`
export const Link = styled.a`
`

// 右边/推荐
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`
export const RecommendItem = styled.div`
    width:100%;
    min-height: 50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    margin-bottom: 6px;
    border-radius: 4px;
`

export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
`
export const WriterHeader = styled.div`
   
  margin-bottom:10px;
   font-size:14px;
   line-height:24px;
   color:#999
`
export const WriterSwitch = styled.a`
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
export const WriterList = styled.div`
  margin-bottom:10px;
   font-size:14px;
   line-height:24px;
   color:#999;
`

export const WriterItem = styled.div`
  margin-bottom:10px;
   font-size:14px;
   line-height:24px;
   color:#999;

   .avatar{
    float: left;
    width: 48px;
    height: 48px;
    border-radius:24px;
    margin-right: 10px;
   }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
   }
   .name{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
   }
   .desc{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
   }

`