// 04_Learn_Log_src/index.js 是 JS 的入口文件.

// 引入 React DOM
import ReactDOM from 'react-dom/client'

// 创建 JSX
const App = <div>
    <h1>这是一个 React 项目!!</h1>
    <p>我终于有了第一个 React 项目</p>
</div>;

// 获取跟容器
const root = ReactDOM.createRoot(document.getElementById('root'));

// 将 App 渲染进根容器
root.render(App);

