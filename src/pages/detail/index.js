import React, { Component } from 'react'

class Detail extends Component{

    render(){
        let detailId = this.props.match.params.id
        return (
         <div>DETAIL id:{detailId}</div>
        )
    }
}

export default Detail