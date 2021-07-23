import React from 'react'
import { useEffect, useState } from 'react'
import { Figure } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { arr } from '../Data/data'
const Movie = () => {
    const { id } = useParams()
    const [movies, setmovies] = useState(arr)
    useEffect(() => {
        setmovies(arr)
    })
    var movie = (id > arr.length) ? movies[0] : movies[id - 1]
    return (
        <div className='movie-container' >

            <Figure>
                <div className='figure-img'>
                    <Figure.Image
                        width={320}
                        height={600}
                        alt="171x180"
                        src={movie.img}
                    />
                </div>
                <Figure.Caption>
                    {movie.description}
                </Figure.Caption>
                <Figure.Caption>
                    Ratings : {movie.rate}
                </Figure.Caption>
            </Figure>
        </div>
    )
}

export default Movie
