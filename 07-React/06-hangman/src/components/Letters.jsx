import React from 'react'
import Letter from './Letter';

function Letters({solution,onClickEvent}) {
    const letters=[...Array(26)].map((_,i)=>String.fromCharCode(i+65));
    
    return (
        <>
        {letters.map(l=>{
           let className= solution.has(l)?"disable":"enable";
        return <Letter key={l} className={className} Letter={l} onClickEvent={onClickEvent}/>})}
        </>

    )
}

export default Letters
