import React, { Component, Fragment } from 'react';
class Baobei extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['按摩', '亲亲', '抱抱'],
            inputVal: 'bx',
            btnname: '增加'
        }
        this.inputChange = this.inputChange.bind(this)
        this.addList = this.addList.bind(this)
    }
    inputChange(event) {
        this.setState({ inputVal: event.target.value })
    }
    addList() {
        this.setState({ list:[...this.state.list,this.state.inputVal]})
    }
    
    render() {
        return (
            <Fragment>
                <input type='text' value={this.state.inputVal} onChange={this.inputChange} />
                <button onClick={this.addList}>{this.state.btnname}</button>
            </Fragment>
        );
    }
}

export default Baobei;