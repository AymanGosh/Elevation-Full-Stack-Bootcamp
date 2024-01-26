import React from 'react'

function Solution({solution,SEARCHEN_WORD}) {
    const searchenWord=[...SEARCHEN_WORD]
    return (
        <>{searchenWord.map(l=>{
            return solution.has(l)?l+" ":"_ ";
        })}</>
    )
}

export default Solution
