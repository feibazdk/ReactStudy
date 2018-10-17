import React from 'react'
import ReactDOM from 'react-dom'

/**
 * jsx 语法的注意点
 * 1、渲染的 DOM 元素，所有节点必须有一个根元素
 * 2、注释
 * 3、类名使用className 替换 class
 * 4、for为转换htmlFor
 * 5、标签必须成对出现，单标签，必须闭合
 */

//  1、使用注释
{/* 推荐使用的注释 */}


ReactDOM.render(<div>
    {/* 推荐使用的注释 */}
    {/* className 替换 class */}
    <h5 className="style">className 替换 class</h5>
    {/* for为转换htmlFor */}
    <label htmlFor="warning"></label>
</div>,document.getElementById('app'))