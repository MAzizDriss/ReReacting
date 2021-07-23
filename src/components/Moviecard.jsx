import React from 'react'
import { Button, Card } from 'react-bootstrap'
const Moviecard = (props) => {
    const movie = props.movie
    return (
        <div className='movie-card'>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={movie.img} />
                <Card.Body>
                    <Card.Title>{movie.name}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <Button variant="primary">See more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Moviecard
