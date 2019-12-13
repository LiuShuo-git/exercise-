import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '这是一个大大的H1')
// ReactDOM.render(myh1, document.getElementById('root'))
// const myDiv = <div id="myDiv">我是div
// <h1>我是div中的H1</h1>
// </div>
// 数字
let num = 1
// 字符串
let str = '蒹葭'
// 布尔值
let boole = true
// 数组
let arr = [
   <h1>大大</h1>,
   <h3>小小</h3>
]
let style = {

   color: 'red'
}


// 
let ArreyArr = ['孙悟空', '贝吉塔', '布偶', '弗利沙']
let newArr = []
ArreyArr.forEach((item, index) => {
   const temp = <li key={index}>{item}</li>
   newArr.push(temp)
})

function add() {
   console.log(333);

}

ReactDOM.render(
   // <div>
   //    <h1 style={style}>{num}</h1>
   //    <hr />
   //    <span>{str}</span>
   //    <hr />
   //    <p>
   //       {boole ? 'yes' : 'no'}
   //    </p>
   //    <hr />

   //    <hr />
   //    <ul>{
   //       ArreyArr.map((item, index) => {
   //          return <li key={index}>{item}</li>
   //       })
   //    }</ul>
   //    <hr />
   //    <ul>
   //       {newArr}
   //    </ul>
   //    <button onClick={add}>添加</button>

   // </div>
   App, document.getElementById('root'));


