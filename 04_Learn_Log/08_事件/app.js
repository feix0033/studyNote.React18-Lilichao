export function App() {
    const clickHandler = (event) =>{
        event.preventDefault(); //取消默认行为
        event.stopPropagation(); // 取消事件的冒泡, 所谓的冒泡就是事件的向上触发.
        alert("我是 click handler 的 alert!");
    //     在 react 中无法通过 return false 取消默认行为
    //     return false:
        /*
        * 事件对象
        *   - React 事件中同样会传递事件对象, 可以在响应函数中定义参数来接受时间对象.
        *   - React 中的事件对象同样不是原生的事件对象, 是经过 React 包装后的事件对象.
        *   - 由于对象进行过包装, 所以使用过程中, 我们无须考虑兼容性的问题.
        * */
        // alert(event);
    }



    return <div
        onClick={()=>{alert('div')}}
        style={{width: 200, height:200, margin: "100px auto", background:"#bfa"}}>
        {/*
            在 React 中时间需要通过元素的属性来设置,
                和原生的不同, 在 react 中时间的属性需要使用驼峰命名法
                    onclick --> onClick
                    onchange --> onChange
                属性值不能直接调用代码, 而是需要一个回调函数.
                    onclick = alert(123);
                    --> onClick = { ()=>{alert(123)} }
        */}
        <button onClick={()=>{alert(123)}}>点我一下</button>
        <button onClick={clickHandler}>haha</button>
        <br/>
        <a href="https://www.google.dk" onClick={clickHandler}>超链接</a>

    </div>;
}