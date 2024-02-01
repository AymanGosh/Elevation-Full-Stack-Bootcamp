import React from 'react'
import Movies from './Movies'

function Catalog({getCategoryData}) {
    return (
        <div>
            Catalog
            <Movies movies={getCategoryData("catalog")}/>
        </div>
       
    )
}

export default Catalog
