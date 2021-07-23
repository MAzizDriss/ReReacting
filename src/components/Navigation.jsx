import { Navbar, Container, Nav, FormText } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import MovieShow from './MovieShow'
import Movie from './Movie'
const Navigation = () => {
    return (
        <header>
            <Router>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Link to='/' className='link'><Navbar.Brand href="#home" style={{ marginLeft: "10%" }}>Watanya 2</Navbar.Brand></Link>
                        <Nav className="me-auto">
                            <Link to='/' className='link'><Nav.Link href="#home">Home</Nav.Link></Link>
                            <Link to='/mymovies' className='link'><Nav.Link href="#pricing">My movies</Nav.Link></Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path='/movie/:id'>
                        <Movie />
                    </Route>
                    <Route exact path="/">
                        <MovieShow />
                    </Route>
                </Switch>
            </Router>
        </header>
    )
}

export default Navigation
