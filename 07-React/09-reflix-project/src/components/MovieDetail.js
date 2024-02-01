import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail({getCategoryData}) {
    const{id} = useParams();
    const movieDetail=getCategoryData("catalog")[id];
    return (
        <>{movieDetail.title}</>
    )
}

export default MovieDetail
