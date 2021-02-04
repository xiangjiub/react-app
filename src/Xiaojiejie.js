/*
 * @Author: your name
 * @Date: 2021-02-02 17:44:16
 * @LastEditTime: 2021-02-02 18:16:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\Xiaojiejie.js
 */

import React, { Component, Fragment } from "react";

class Xiaojiejie extends Component {
  //js的构造函数，由于其他任何函数执行
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法
    this.state = {
      inputValue: "xj", // input中的值
      list: ['基础按摩','精油推背'], //服务列表
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/> 
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        <ul>
         {
             this.state.list.map((item,index) => {
                 return <li key={index+item}>{item}</li>
             })
         }
        </ul>
      </Fragment>
    );
  }
  inputChange(e){
    console.log(e.target.value)
    // this.state.inputValue=e.target.value; //不能直接修改值
    this.setState({
        inputValue: e.target.value
    })
  }
  addList(){
    this.setState({
        list: [...this.state.list,this.state.inputValue]
    })
  }
}
export default Xiaojiejie;

// 一个是this指向不对，你需要重新用bind设置一下指向(ES6的语法)。
// 另一个是React中改变值需要使用this.setState方法。