import React from 'react'
import ReactDOM from 'react-dom'

// class 类的学习
import './006-构造函数复习'
import './007-class类与继承'

// 导入单独提取的组件
import Hello from "@/components/Hello"

const company = {
    name: 'sina',
    age: 1998,
    address: '中国'
}


ReactDOM.render(<div>
    <Hello {...company}></Hello>
</div>,document.getElementById('app'))