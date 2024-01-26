import React from 'react'

function Letter({Letter,className,onClickEvent}) {
    
    
    return (
        <span onClick={()=>{onClickEvent(Letter)}} className={className}>{Letter}</span>

    )
}

export default Letter

