import React from 'react'
import ReactDOM from 'react-dom'

import MobileItem from "@/components/MobileItem"

export default class MobileList extends React.Component {
    constructor() {
        super()
        // 这里只有调用了 super 以后，才能使用 this
        this.state = {
            bookList: [
                { id: 1, name: "华为", price: '16680', from: '中国' },
                { id: 2, name: "三星", price: '6800', from: '韩国' },
                { id: 3, name: "苹果", price: '10000', from: '美国' },
                { id: 4, name: "小米", price: '4300', from: '中国' }
            ]
        }
    }

    render() {
        return <div>
            <h3>手机资讯</h3>
            {this.state.bookList.map(item => <MobileItem {...item} key={ item.id }></MobileItem>)}
        </div>
    }
}