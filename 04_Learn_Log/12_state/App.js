import {useState} from "react";

const App = () => {
    /*
    在 React 中, 在当组件渲染完毕后, 再修改组件中的变量, 不会使组件重新渲染,
    要使得组件可以受到变量的影响,必须在变量修改个后对组件进行重新渲染.
    这里我们就需要一个特殊的变量, 当这个变量被修改时, 组件会自动重新渲染.

    state 相当于一个变量, 只是这个变量在 React 中进行了注册, React 会监控这个变量的变化,
    当 state 发生变化后, 会自动触发组件的重新渲染, 使得我们的修改可以在页面中呈现.

    在函数组件中, 我们需要钩子函数, 获取 state
    使用钩子 useState() 来创建 state
        import {useState} from "react"

    它需要一个参数, 是 state 的初始值.
        该函数会返回一个数组:
            数组中第一个元素是初始值.
            - 初始值只用来显示数据, 直接修改不会触发组件的重新渲染.
            数组中的第二个元素, 是一个函数. 通常会命名为 setxxx
            - 这个函数用来修改 state 调用其修改 state 后会触发组件的重新渲染
                并且使用修改后的 state 作为新的值.
     */
    /*
    当点击 + 时, 数字变大
    当点击 - 时, 数字减小
     */

    console.log("函数执行了, 组件创建完毕");

    // const result = useState(1);
    console.log(result);

    // 创建一个变量存储数字
    // let counter = 2;
    // let counter = result[0];
    // let setCount = result[1];
    const [counter, setCounter] = useState(1);


    const addHandler = () => {
        // 点击后数字加 1
        setCounter(counter + 1);
    }
    const less = () => {
        // 点击后数字减一
        setCounter(counter - 1);
    }

    return <div className={'app'}>
        <h1>{counter}</h1>
        <button onClick={less}>-</button>
        <button onClick={addHandler}>+</button>
    </div>
}
export default App;

