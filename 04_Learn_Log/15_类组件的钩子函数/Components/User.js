import React, {Component} from 'react';

class User extends Component {
    /*
    类组件的 props 是存储到类的实例对象中的
        可以直接通过实例对象访问
        this.props
    类组件中的 state 统一存储到了实例对象的 state 属性中.
        可以通过 this.state 来访问
        通过 this.setState 对其进行修改
            当我们通过 this.setState() 修改属性时, react 只会修改设置的值, 之前的属性都会保留.
            但是这仅限于直接存储于 state 中的属性.
    函数组件中, 响应函数, 直接以函数的形式, 定义在组件中.
        但是在类组件中, 响应函数是以类的方法来定义的.
    获取 DOM 对象:
        1. 创建一个属性, 用来存储 DOM 对象, 并且确保每次都使用同一个 ref 对象.
                divRef = React.createRef();
        2. 将这个属性设置为置顶元素的 ref 值.
     */

    // 创建属性存储 dom 对象
    divRef = React.createRef();


    // 向 state 中添加属性
    state = {
        count:0,
        test: "hehe"
    };

    // 为了省事, 类组件中的响应函数, 都应该以箭头函数的形式定义.
    clickHandler = () => {
        // this.setState({count: this.state.count + 1}); // 不考虑异步延迟的问题
        // this.setState(prevState => {
        //     return {count: prevState.count + 1}
        // }); // 考虑异步延迟问题

        // 当直接修改 state 属性 count 的时候, 其他 state 属性会保存不变.
        // this.setState({count:10});
        console.log(this.divRef.current);
    }


    render() {
        // console.log(this.props);
        console.log(this.divRef);

        return (
            <div ref={this.divRef}>
                <h1>{this.state.count}--{this.state.test}</h1>
                <button onClick={this.clickHandler}>点</button>
                <ul>
                    <li>姓名: {this.props.name}</li>
                    <li>年龄: {this.props.age}</li>
                    <li>性别: {this.props.gender}</li>
                </ul>
            </div>
        );
    }
}

export default User;