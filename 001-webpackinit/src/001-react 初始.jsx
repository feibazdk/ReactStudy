// 导入 react 与 react-dom 模块
// react 模块的作用 创建组件、虚拟DOM 以及 组件的生命周期
import React from 'react'
// react-dom 模块的作用是专门用来进行 DOM 操作的
import ReactDOM from 'react-dom'

/**
 * React.createElement:创建一个虚拟 DOM 元素
 * 第一个参数：字符串类型参数，表示将要创建的标签名称
 * 第二个参数：对象类型的参数，表示将要创建元素的属性节点
 * 第三个参数：创建元素的子节点
 * 第N个参数 ：其他子元素
 */
const box = React.createElement('div',{ class: 'box' }, '神奇的react')


/**
 * 渲染虚拟 DOM 元素z
 * 第一个参数：表示要渲染的虚拟 DOM 对象
 * 第二个参数：指定要插入的容器，**注意** ，第二个元素必须是一个容器的 DOM 对象
 */
ReactDOM.render(box,document.getElementById('app'))