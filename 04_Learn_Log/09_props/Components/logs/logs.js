import './logs.css'

/*
日志的容器
 */

import LogItems from "./logItems/logItems";

const Logs = () => {
    return <div className="logs">
        {/*在父组件中可以直接在子组件中设置属性*/}
        {/*<LogItems test="123" hello="abc" fn={() => {}}/>*/}
        <LogItems date={new Date()} desc={"学习前端"} time="50"/>
        <LogItems date={new Date()} desc={"复习前端"} time="30"/>
    </div>
}
export default Logs;