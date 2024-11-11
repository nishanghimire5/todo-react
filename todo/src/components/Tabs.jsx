import React from 'react'

function Tabs() {
const tabs = ['ALL','Open','Completed']


  return (
    <nav>

{tabs.map((tab,tabIndex)=>{
    return(
        <button key={tabIndex} className='tab-button'>
            <h4>{tab} <span>(0)</span></h4>
        </button>
    )

})}

    </nav>
  )
}

export default Tabs