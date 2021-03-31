import React, { Component } from 'react'
import store from '../../redux/store'
//纯react求和加
export default class Count extends Component {
    state = {count:0};
    componentDidMount() {
        //redux状态的改变就调用render()
        store.subscribe(() => {
            this.setState({});
        })
    }
    increment = () => {
        const {value} = this.selectnumber
        // const {count} = this.state
        // this.setState({ count:  value*1 + count});
        store.dispatch({type:"increment",data:value*1})
    }
    decrement = () => {

    }
    incrementIfOdd = () => {

    }
    incrementAsync = () => {

    }
    render() {
        return (
            <div>
                <h2>当前求和:{store.getState()}</h2>
                <select ref={ c => this.selectnumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
