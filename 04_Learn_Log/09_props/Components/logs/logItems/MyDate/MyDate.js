import React from 'react';
import './MyDate.css'

const MyDate = (props) => {
    return (
        <div>
            <div className="date">
                <div className="month">
                    {props.date.getMonth()}
                </div>
                <div className="day">
                    {props.date.getDate()}
                </div>
            </div>
        </div>
    );
};

export default MyDate;