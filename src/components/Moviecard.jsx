import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Ratings : {movie.rate}</ListGroupItem>
                    </ListGroup>
                    <Link to={`/movie/${movie.id}`}><Button variant="primary">more about {movie.name}</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Moviecard
