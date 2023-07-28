import {useRef, useState} from "react";

const App = () => {
    /*
    获取原生的 DOM 对象
    1. 可以使用传统的document 来对 DOM 进行操作
    2. 直接从 REACT 处获取 DOM 对象
        步骤:
        1. 创建一个存储 DOM 对象的容器.
            - 使用 useRef() 钩子函数
            - 钩子函数的注意事项:
                1. React 钩子函数只能用于函数组件或自定义钩子.
                2. 钩子函数只能直接在函数组件中调用.
                 (App 是函数组件, 可以用, 但是 clickHandler 是组件中的方法,  就不能用)
        2. 将容器设置为想要获取的 DOM 对象元素的 ref 属性
            <h1 id="header" ref={h1Ref}>我是标题</h1>
            - React 会自动将当前元素的 DOM 对象设置为容器的 current 属性.
    useRef()
        - 返回的就是普通的 JS 对象
        - {current: undefined}
        - 所以我们直接创建一个 JS 对象, 也可以代替 useRef()
        - 区别:
            我们创建的对象, 组件每次重新渲染, 都会创建一个新的对象.
            useRef 创建的对象 , 可以确保每次渲染获取到的都是同一个对象.
        - 当你需要一个对象, 不会因为组件的重新渲染而改变时, 就可以使用 useRef()
     */
    const h1Ref = useRef(); // 创建一个容器.
    const clickHandler = () => {
        // 通过 id 获取 h1
        const header = document.getElementById('header');
        // alert(header);
        // header.innerHTML = "haha";

        console.log(h1Ref);
        console.log(h1Ref.current === header);
        // h1Ref.current.innerText = "xiix"; // 尽量不要使用 dom 去修改, 会脱离 React 的控制.

    };

    // 想获取哪个 DOM 元素就把 ref 放在谁的属性上.
    return <div className={'app'} >
        <h1 id="header" ref={h1Ref}>我是标题</h1>
        <button onClick={clickHandler}>1</button>
        <button>2</button>
    </div>
}
export default App;

