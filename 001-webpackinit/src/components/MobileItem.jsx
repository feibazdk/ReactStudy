import React from 'react'
import ReactDOM from 'react-dom'

export default function MobileItem(props) {
    return <div>
        <h4>{props.name}</h4>
        <p>
            <span>{props.price}</span>
            <span>{props.from}</span>
        </p>
    </div>
}