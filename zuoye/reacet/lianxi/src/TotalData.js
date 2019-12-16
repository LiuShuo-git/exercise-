import React, { Component } from 'react'

export default class TotalData extends Component {
   
   render() {
      return (
         <div>
            <ul>
               {
                  this.props.message.map((v, k) => {
                     // <button onClick={this.props.del.bind(this, k)}>删除</button>
                     return <li key={k}>{v} </li>
                  })
               }
            </ul>
         </div>
      )
   }
}
