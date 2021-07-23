import React, { useState, useEffect } from 'react'
import Moviecard from './Moviecard'
import choufli_hal from '../Media/ch.jpg'
const MovieShow = () => {
    const [movie, setmovie] = useState(
        {
            name: 'Chofli hal',
            description: 'chouuuf choufli hal choouf',
            img: choufli_hal
        }
    )
    return (
        <div className='show'>
            <h2>Your favorite movie selection:</h2>
            <Moviecard movie={movie} />
            <Moviecard movie={movie} />
            <Moviecard movie={movie} />
            <Moviecard movie={movie} />
            <Moviecard movie={movie} />
            <Moviecard movie={movie} />
            <Moviecard movie={movie} />
            <Moviecard movie={movie} />
        </div>
    )
}

export default MovieShow
