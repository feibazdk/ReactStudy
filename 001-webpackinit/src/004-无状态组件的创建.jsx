import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 组件的第一种创建方式：无状态组件的创建 -- 构造函数的方式
 * **注意点**
 * 1、组件名称首字母必须大写
 * 2、组件内部必须 return 一个虚拟 DOM 元素
 * 3、组件内部的 props 是只读的，不能被重新赋值
 */

// 组件的名称首字母必须达大写
// 如果要接收外界传递的数据，需要在构造函数的参数列表中使用props(形参)来接收；
function Hello(props) {
    
    // props 是只读的
    console.log(props);

    // 在组件的内部，必须返回一个虚拟 DOM 元素
    return <div>{ props.name } -- { props.age } -- { props.address }</div>
}

const company = {
    name: 'sina',
    age: 1998,
    address: '中国'
}


ReactDOM.render(<div>
    {/* 组件的调用方式，直接将组件的名称当成标签来使用即可 */}
    {/* <Hello name={company.name} age={ company.age } address={ company.address }></Hello> */}
    {/* 使用拓展运算符来传递数据 */}
    <Hello {...company}></Hello>
</div>,document.getElementById('app'))