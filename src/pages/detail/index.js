import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Detail extends Component{

    render(){
        let detailId = this.props.match.params.id
        return (
         <div>DETAIL id:{detailId}</div>
        )
    }
}

export default withRouter(Detail)