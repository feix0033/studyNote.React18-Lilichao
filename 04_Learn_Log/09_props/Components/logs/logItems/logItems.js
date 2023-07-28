import React from 'react';
import MyDate from "./MyDate/MyDate";
import './logItem.css'

const LogItems = (props) => {
    /*
    * 在函数组件中, 属性就相当于函数的参数, 可以通过参数来访问
    * 我们可以在函数的形参中定义一个 props. 它是一个对象.
    * 包含了父组件传递的全部参数
    * */
    console.log(props)
    return (
        <div className="item">
           <MyDate date={props.date}/>
            {/*    日志内容的容器 */}
            <div className="content">
                {/*
                    如果将组件中的数据全部写死, 就会使组件中的数据无法根据实际情况进行变化,
                    所以希望组件中的数据可以从外部传递进来, 在组件之间, 父组件可以通过 props (属性) 向子组件传递数据.
                */}
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}</div>
            </div>
        </div>
    );
};

export default LogItems;