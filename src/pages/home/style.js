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
    width:280;
    float:left;
`

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
`
export const Link = styled.a`
`
