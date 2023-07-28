import React from 'react';
import MyDate from "./MyDate/MyDate";
import './logItem.css'

const LogItems = (props) => {
    /*
    props 是只读的, 不能修改.
     */
    // props.desc = "haha"; // 报错
    console.log(props.desc);
    return (
        <div className="item">
           <MyDate date={props.date}/>
            {/*    日志内容的容器 */}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
        </div>
    );
};

export default LogItems;