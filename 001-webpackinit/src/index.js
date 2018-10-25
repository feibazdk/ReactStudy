import React from 'react'
import ReactDOM from 'react-dom'

// import MobileList from "@/components/MobileList"

import LiftCycle from "@/knowledgePoint/010-React 声明周期"




ReactDOM.render(<div>
    <LiftCycle initprice={ 10 }></LiftCycle>
    <p></p>
    <LiftCycle></LiftCycle>
</div>, document.getElementById('app'))