import React from 'react';
import MyDate from "./MyDate/MyDate";
import './logItem.css'
import Card from "../../UI/Card/Card";

const LogItems = (props) => {
    /*
    props 是只读的, 不能修改.
     */
    // props.desc = "haha"; // 报错
    console.log(props.desc);
    return (
        <Card className="item">
           <MyDate date={props.date}/>
            {/*    日志内容的容器 */}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
        </Card>
    );
};

export default LogItems;