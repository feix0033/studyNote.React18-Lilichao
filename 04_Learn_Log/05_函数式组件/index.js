import ReactDom from "react-dom/client";
import App from './App'
/*
组件
    - React 中组件有两种创建方式
    - 函数式组件
        - 函数组件就是一个返回 JSX 的普通函数
        - 组件的首字母必须是大写
    - 类组件
 */

// function App(){
//     return <div>Hello React!</div>
// }


ReactDom.createRoot(document.getElementById('root'))
    // react 组件可以直接通过 jsx 渲染
    .render(<App/>);