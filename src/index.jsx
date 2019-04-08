/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-Plugin/x-seed
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import Websocket from './components/Websocket';
import reducers from './components/reducers';
import actions from './components/actions';
module.exports = {Websocket,reducers,actions};  //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
