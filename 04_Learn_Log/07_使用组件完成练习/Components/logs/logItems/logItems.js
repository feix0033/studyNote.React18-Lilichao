import React from 'react';
import MyDate from "./MyDate/MyDate";
import './logItem.css'

const LogItems = () => {
    return (
        <div className="item">
           <MyDate/>
            {/*    日志内容的容器 */}
            <div className="content">
                <h2 className="desc">学习 React</h2>
                <div className="time">40 分钟</div>
            </div>
        </div>
    );
};

export default LogItems;