import React from "react";

export default function Hello(props) {
  // props 是只读的
  // console.log(props);
  // 在组件的内部，必须返回一个虚拟 DOM 元素
  return <div>{ props.name } -- { props.age } -- { props.address }</div>
}