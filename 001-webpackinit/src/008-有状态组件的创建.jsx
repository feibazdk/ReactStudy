import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 组件的创建第二种方式 class 关键字创建组件
 * 在 类 的内部，接收外界传递过来的参数，直接使用 this.props.xxx 访问即可
 * 注意：类 声明方法中的 props 也是只读的，
 */
class Hello extends React.Component {

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