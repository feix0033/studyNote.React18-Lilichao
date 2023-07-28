/*
    WebStorm 中的快捷方式
        rsc --> React stateless component 生成函数组件( 不带 props )
        rsi --> React stateless inner 生成函数组件 (带 props)
        rcc --> React class commponent 生成类组件
 */
import React, {Component} from 'react';
import User from "./Components/User"

class App extends Component {
    render() {
        return (
            <div className="app">
                <User name={'猪八戒'} age={28} gender={"男"}/>
            </div>
        );
    }
}

export default App;