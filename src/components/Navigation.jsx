import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import MovieShow from './MovieShow'

const Navigation = () => {
    return (
        <header>
        <Router>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{marginLeft:"10%"}}>Watanya 2</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to ='/profile'><Nav.Link href="#features">Profile</Nav.Link></Link>
                    <Link to ='/'><Nav.Link href="#pricing">My movies</Nav.Link></Link>
                </Nav>
            </Container>
        </Navbar>
        
                <Switch>
                    <Route exact path="/profile">
                        <h1>gggg</h1>
                    </Route>
                    <Route path="/">
                        <MovieShow/>
                    </Route>
                </Switch>
        </Router>
        </header>
    )
}

export default Navigation
