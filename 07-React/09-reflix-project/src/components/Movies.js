import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'

function Movies({movies}) {
     return (
        <>
        {movies.map((m,index)=>{
            return (
            <Link  key={index} to={`/movies/${index}`}>
            <Movie key={index} movie={m}/>
            </Link>)
        })}</>
    )
}

export default Movies
