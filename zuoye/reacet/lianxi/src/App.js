import React, { Component } from 'react';
import Life from './Life'
import TotalData from './TotalData'
import TotalInput from './ToataInput'

class App extends Component {
  // 构造器
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      message: []
    }
  }
  valueChanged(e) {
    // console.log(e.target.value);
    this.setState({
      value: e.target.value
    })

  }
  add() {
    console.log(this.state);
    // let newMessage = this.state.message
    // newMessage.push(this.state.value)
    // console.log(newMessage);
    // this.setState({
    //   value: '',
    //   message: newMessage
    // })
  }
  del(k) {
    console.log(k);



    let map = this.props.message.filter((item, index) => {
      return k != index
    })
    // console.log(map);
    // this.state.message = map
    this.setState({
      value: '',
      message: map
    })
    console.log(this.state);


  }
  render() {
    let view = (
      <div>
        <TotalInput valueChanged={this.valueChanged} add={this.add} value={this.state.value}  />

        < TotalData message={this.state.message} del={this.del} />

        <hr />
        <Life />
      </div>

    )
    return view
  }


}



export default App;
