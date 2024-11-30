import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" data-bs-theme="dark" style={{ width: "100%" }}>
                    <Container>
                        <NavLink to='/' className="text-decoration-none text-light mx-2" style={{ fontSize: "24px" }}>Recipe App</NavLink>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">Create Recipe</Nav.Link>
                        </Nav>
                        <Nav className='text-end'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" className='dropdown_btn' id="dropdown-basic">
                                    <div style={{width:"45px",height:"45px",cursor:"pointer"}}>
                                        <img src="/logo192.png" style={{width:"100%",height:"100%"}} alt="" />
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <NavLink to='/login' className="text-decoration-none text-light mx-2">Login</NavLink>

                                </Dropdown.Menu>
                            </Dropdown>

                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header