import React from 'react';
import './MyDate.css'

const MyDate = (props) => {
    //获取月份, 日期
    const month = props.date.toLocaleString('zh-CN',{month:'long'});
    let date = props.date.getDate();

    return (
        <div>
            <div className="date">
                <div className="month">
                    {month}
                </div>
                <div className="day">
                    {date}
                </div>
            </div>
        </div>
    );
};

export default MyDate;