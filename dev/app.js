import React from 'react';
import ReactDOM from 'react-dom';
import {Provier} from 'react-redux';

import { Provider,connect } from 'react-redux';
import { createStore } from 'redux';
const {Websocket,reducers,actions}  =  require('../src/index');
let store = createStore(reducers);
var appElement = document.getElementById('example');
const mapStateToProps = (state)=>{
  return ({
    costBid:state.costBid
  })
}
const mapDispatchToProps =  (dispatch, ownProps) => {
  return {
    update:(data)=> dispatch( actions(data) )
  }
}
const RWebsocket = connect(mapStateToProps,mapDispatchToProps)(Websocket)
const regist = (update)=>{
  const ws = new WebSocket("ws://192.168.80.37:8090/ws");
  ws.onmessage=({data})=>{
    let title = data.match(/(^.+?):/)[1];
    var body = data.substr(title.length + 1);
    if('00012.COM_AVE_FWD.180' ===title){
      update(JSON.parse(body)[0])
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <RWebsocket regist={regist}>
        </RWebsocket>
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, appElement);