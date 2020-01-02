import React, { Component } from 'react'

export class Life extends Component {
   constructor(props) {
      super(props)
      this.state = {
         date: new Date().toLocaleString(),  // 当前时间
         int: null         // 启动的定时器
      }
   }

   render() {
      console.log('render')
      return (


         <div>
            <h2>Lift组件</h2>
 
            {this.state.date.toString()}
         </div>
      )
   }
   componentWillMount() {
      let int = setInterval(() => {
         this.setState({
            date: new Date().toLocaleString()
         })
      }, 1000)
      console.log(int);

      this.setState({
         int
      })

   }
   componentWillUnmount() {
      console.log(0);
      // 销毁组件时停止定时器
      clearInterval(this.state.int)
   }

}

export default Life
