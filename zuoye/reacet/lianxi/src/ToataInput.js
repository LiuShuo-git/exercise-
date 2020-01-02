import React, { Component } from 'react'

export default class ToataInput extends Component {
   render() {
      return (
         <div>
            <input onChange={()=>{this.props.valueChanged()}} type='text' value={this.props.value} />
            <button onClick={this.props.add.bind(this)}>添加</button>
         </div>
      )
   }
}
