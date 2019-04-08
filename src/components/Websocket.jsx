/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-input
 * User: 田想兵
 * Date: 2018-11-27
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from "react";
// import update from './action';

class Websocket extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let {regist,update} = this.props;
        regist(update);
        // const ws = new WebSocket(url);
        // ws.onmessage=({data})=>{
        //     update(data)
        // }
    }
    render() {
        return <div>{this.props.costBid}{this.props.children}</div>
    }
}
export default Websocket