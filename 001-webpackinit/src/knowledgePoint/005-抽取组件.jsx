import React from 'react'
import ReactDOM from 'react-dom'

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