import React from 'react';
import './Card.css'

const Card = (props) => {
    /*
    props.children 表示组件的标签体.
     */
    // console.log(props.children); // 标签体
    // console.log(props.name); // 标签的自定义属性

    return <div className={`card ${props.className}`}>{props.children}</div>
};

export default Card;