import ReactDom from 'react-dom/client'

const App = <div className="logs">
    {/*日志项的容器 */}
    <div className="item">
        {/*日期的容器*/}
        <div className="date">
            <div className="month">
                四月
            </div>
            <div className="day">
                19
            </div>
        </div>
    {/*    日志内容的容器 */}
        <div className="content">
            <h2 className="desc">学习 React</h2>
            <div className="time">40 分钟</div>
        </div>
    </div>
</div>;

ReactDom.createRoot(document.getElementById('root')).render(App);

