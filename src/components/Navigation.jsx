import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{marginLeft:"10%"}}>Watanya 2</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link href="#pricing">My movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation
