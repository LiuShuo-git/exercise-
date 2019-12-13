import React, { Component } from 'react';

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
    console.log(e);

  }
  render() {
    let view = (
      <div>
        <input onChange={this.valueChanged.bind(this)} type='text' value={this.state.value} />
        <button>添加</button>
        <ul>
          <li>
            <button>删除</button>
          </li>
        </ul>
      </div>

    )
    return view
  }


}



export default App;
