import React, { useState, useEffect } from 'react'
import Moviecard from './Moviecard'
import data, { arr } from '../Data/data'
const MovieShow = () => {
    const [movies, setmovies] = useState(arr)
    useEffect(() => {
        setmovies(arr)
    })
    return (
        <div className='show'>
            {movies.map(movie => (
                <Moviecard movie={movie} />
            ))}
        </div>
    )
}

export default MovieShow
