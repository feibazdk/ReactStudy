import React from 'react'
import ReactDOM from 'react-dom'

// const styles = {
//     box: { border: '1px dashed #ccc', marginBottom: '20px', textAlign: 'center' }
// }

import style from './styles.css'
console.log(style)

import styles from './styles'

export default function MobileItem(props) {
    return <div style={styles.box}>
        <h4>{props.name}</h4>
        <p>
            <span className={style.color}>{props.price}</span>
            <span>{props.from}</span>
        </p>
    </div>
}