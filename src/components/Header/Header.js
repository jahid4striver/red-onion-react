import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../images/logo2.png'

const Header = () => {
    return (
        <Navbar style={{height: '80px'}} bg="white shadow">
            <Container>
                <Navbar.Brand href="#home"><img height='40px' src={logo2} alt="" /></Navbar.Brand>
                <Nav className="text-dark fw-bold">
                    <Nav.Link href="#home">Cart</Nav.Link>
                    <Nav.Link href="#features">Login</Nav.Link>
                    <Nav.Link style={{backgroundColor:'red'}} className='text-white rounded-pill px-4 py-2 fw-bold' href="#pricing">SignUp</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;