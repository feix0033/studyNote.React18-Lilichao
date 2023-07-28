import './logs.css'
import Card from '../UI/Card/Card'

/*
日志的容器
 */

import LogItems from "./logItems/logItems";

const Logs = () => {
    // 模拟一组从服务器中加载的数据
    const logsData = [
        {
            id:'001',
            date: new Date(2021,2,20,18,30),
            desc: '学习九阳神功',
            time:30
        },
        {
            id:'002',
            date: new Date(2022,5,20,18,30),
            desc: '学习降龙十八掌',
            time:20
        },
        {
            id:'003',
            date: new Date(2023,7,20,18,30),
            desc: '忘记一切',
            time:300
        },
        {
            id:'004',
            date: new Date(2046,2,20,18,30),
            desc: '神功大成',
            time:1
        }
    ];

    // 将数据放入 JSX 中
    // const logItemData = logsData.map((item, id)=> <LogItems key={id} date={item.date} desc={item.desc} time={item.time}/>);
    const logItemData = logsData.map((item,id) => <LogItems key={id} {...item}/>)

    return <Card className="logs">
        {/*在父组件中可以直接在子组件中设置属性*/}
        {/*<LogItems test="123" hello="abc" fn={() => {}}/>*/}
        {
            logItemData
        }
    </Card>
}
export default Logs;