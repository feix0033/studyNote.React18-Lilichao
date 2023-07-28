import React from "react";

/*
类组件必须要继承 React.Components
    相较于函数组件, 类组件的编写要麻烦一些,
    但是他俩的功能是基本一样的.
 */

class App extends React.Component{
    // 类组件中, 必须添加一个 render() 且方法的返回值必须是一个 JSX
    render() {
        return <div>我是一个类组件.</div>
    }
}

export default App;