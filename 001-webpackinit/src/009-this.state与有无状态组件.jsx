import React from 'react'
import ReactDOM from 'react-dom'

/**
 * this.setData 与 无状态有状态组件的区别
 * 1)、无状态有状态组件的区别：
 *      1、用构造函数创建出来的组件称为无状态组件，用 class类创建出来的组件称为有状态组件 
 *      2、区别：有没有 this.state 以及 有没有生命周期
 * 2)、如何使用：
 *      1、官方说：无状态组件，没有自己的state和生命周期函数，运行效率会比有状态组件稍微高一些
 *      2、需要私有数据，使用类创建， 不需要私有数据，则考虑函数声明
 * 3)、props 与 this.state 的区别
 *      1、props 是外界传入的， this.state 是组件内部私有的数据
 *      2、props 是只读的，  this.state 可读可写
 */

class Hello extends React.Component {

    constructor() {
        super()
        // 这里只有调用了 super 以后，才能使用 this
        this.state = {
            info: "北凉白马"
        }
    }

    // 组件内容必须声明一个 render 实例方法表示需要渲染的组件所对应的虚拟 Dom 元素
    // 如果什么都不想渲染需要 return null
    render() {
        return <div>Hello, { this.props.name } -- { this.props.age } -- { this.props.address }</div>
    }
}

const company = {
    name: 'sina',
    age: 1998,
    address: '中国'
}



ReactDOM.render(<div>
    <Hello {...company}></Hello>
</div>,document.getElementById('app'))