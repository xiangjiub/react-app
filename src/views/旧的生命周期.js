
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

    UNSAFE_componentWillMount(){
        console.log('cout-componentWillMount');
    }
    componentDidMount(){
        console.log('cout-componentDidMount');
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