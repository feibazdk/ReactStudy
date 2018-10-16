import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 什么是 JSX 
 * 所谓的 JSX 是一个React扩展， 本质上就是 JavaScript 对象， 
 * React.js 把 JavaScript 语法进行了拓展，支持直接在 JavaScript 里面编写 HTML 标签的语法，
 * 编写类似 HTML的 JavaScript使用 JSX 这使整个代码的结构很清晰，更加方便阅读和书写
 * **特别注意：** react 并不是把 JSX 渲染到页面上，而是先转换成 React.createElement() 的形式，也就是虚拟 DOM ，在进行渲染
 */

// const box = React.createElement('div',{ class: 'box' }, '神奇的react')
const box = <div class="box">神奇的 React</div>

// jsx 基础语法的渲染
let num = 10,
    str = "jsx",
    bol = true,
    arr = [<h4>你好</h4>]




ReactDOM.render(<div>
    {box}
    <hr />
    { num }
    <hr />
    { str }
    <hr />
    { bol.toString() }
    <hr />
    { bol ? "真" : "假" }
    <hr />
    { arr }
</div>,document.getElementById('app'))