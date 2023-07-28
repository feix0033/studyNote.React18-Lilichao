import {useState} from "react";

const App = () => {
    console.log("组件重新渲染");
    /*
    state
        - state 就是一个被 react 管理的变量,
            当我们通过 setState 修改变量的值时, 会触发组件的重新渲染.
        - 只有 state 值发生变化时, 才会触发组件的重新渲染.
        - 当 state 的值时一个对象时, 修改时是使用新的对象去替换已有对象, 比较的时对象的内存地址.
        - 当通过 setStete 修改一个 state 时, 并不表示修改当前的 state 的值,
            它修改的是下次渲染时的值.
        - setState 会触发组件的重新渲染, 它是异步的.
            所以当我们调用 setState 需要用到旧 state 的值时, 一定要注意,
            有可能出现计算错误的情况.
            为了避免这种情况, 可以通过为 setState 传递回调函数的形式, 修改 state.

     */
    const [counter, setCounter] = useState(1);
    const [user, setUser] = useState({name: "孙悟空", age: 18});

    const addHandler = () => {
        setTimeout(()=>{
            // setCounter((prevState)=> {
            //     /*
            //         setState() 中回调函数的返回值, 将会成为新的 state 的值.
            //             在回调函数执行时, react 会将最新的 state 的值作为参数传递.
            //      */
            //     return prevState + 1;
            // } );
            setCounter(prevState => prevState +1);
        },1000);

        // setCounter(2);
        // setCounter(3);
        // setCounter(4);
        // setCounter(5);
        // setCounter(6);
    }

    const updateUserHandler = () => {
        // setUser({name:"猪八戒", age: 28 });

        // 如果直接修改旧的 state 对象, 由于对象还是那个对象, 所以不会生效
        // user.name = "猪八戒"
        // console.log(user);
        // setUser(user);

        // const newUser = Object.assign({}, user); // 浅复制, 将对象的内容复制到目标对象中
        // newUser.name = "猪八戒";
        // console.log(newUser);
        // console.log(newUser === user);
        // setUser(newUser);

        setUser({...user, name:"猪八戒"});
        // 使用对象的展开, 将所有的属性浅复制到新的对象中去, 这个时候, 就会触发组件的重新渲染.
        // 在展开的时候, 使用第二个参数, 修改第一个参数里的属性值. 就能达到对象属性的修改和触发组件的重新渲染.
    }

    return <div className={'app'}>
        <h1>{counter} -- {user.name} -- {user.age}</h1>
        <button onClick={addHandler}>1</button>
        <button onClick={updateUserHandler}>2</button>
    </div>
}
export default App;

