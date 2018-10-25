import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

/**
 * React 声明周期
 * 1、static defaultProps
 *    第一个 static 修饰的静态属性，不是真正的声明周期函数，这是用来给组件，初始化默认的 props 属性值
 *    静态属性有一个特点，不 new 实例，静态属性也可以访问
 * 
 * 2、this.stata = {}
 *    组件创建阶段的第一个生命周期函数，
 *    这行代码，是写到声明周期函数中的，所以在 new 一个组件实例的时候，
 *    第一个执行的声明周期函数，就是构造器 constructor ，
 *    在这个阶段，组件的私有状态数据，就一斤被初始化好了，
 * 
 * 3、componentWillMount
 *    组件创建阶段的第二个生命周期函数 
 *    在这个时候，组件将要被第一次渲染，
 *    注意，此时组件还没有真正在内存中被渲染为一颗虚拟 Dom 树
 * 
 * 4、render
 *    组件创建阶段的第三个生命周期函数，
 *    在这个时候，正在内存中渲染虚拟 Dom 树；
 *    当 render 函数执行完毕，内存中虚拟 DOM 树第一次被完整的渲染完毕
 * 
 * 5、componentDidMount
 *    组件创建阶段的最后一个生命周期函数，通过 render 函数，在内存中渲染好的DOM树
 *    已经挂载到真实的页面上，此时，首页才被渲染出来
 *    执行完这个函数，组件就脱离了创建阶段，进入了运行阶段
 */

export default class LiftCycle extends React.Component {

    static propTypes = {
        initprice: PropTypes.number.isRequired
    }

    static defaultProps = {
        initprice: 0
      }

    constructor() {
        super()

        this.state = {
            name: 'React'
        }
    }

    componentWillMount() {
        // 在 componentWillMount 生命周期函数中，组件的 props 和 state 数据，
        // 都可以被访问了，同时，组件上自定义实例方法，也可以被访问了，
        console.log(this.props.initprice)
        console.log(this.state.name)
    }

    render() {
        // 虚拟DOM正在被创建，当render执行完，虚拟DOM才创建到内存中
        return <div>
            <h4>react 生命周期</h4>
            <button>价格+1</button>
            <h5 className="newPrice">当前价格：{this.props.initprice}</h5>
        </div>
    }

    componentDidMount() {
        // 在 componentDidMount 中，组件已经被第一次渲染到页面中
        console.log(document.querySelector(".newPrice").innerHTML)
    }
}