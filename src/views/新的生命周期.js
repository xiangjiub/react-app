
// class Demo extends React.Component{

// }

import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        console.log('cout-constructor');
        super(props);
    }
    state = { count:0 }

    add = () => {
        const {count} = this.state;
        this.setState({ count:count+1 });
    }
    // 在更新之前获取快照
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
        return  'brefocd'
    }
    //组件挂载完毕的钩子
    componentDidMount(){
        console.log('cout-componentDidMount');
    }
    //组件更新完毕的钩子
    componentDidUpdate(prevProps,prevState,snapshotVaule){
        console.log('componentDidUpdate',prevProps,prevState,snapshotVaule)
    }
    // showInfo = () => 
    render() { 
        console.log('cout-render');
        const {count} = this.state;
        return ( 
        <div>
            <h2>当前和:{count}</h2>
            <button onClick={this.add}>点击求和</button>
        </div> 
        );
    }
}
 
export default Demo;