
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Header() {
    const expand = 'lg'
    return (
        <>
            <Navbar expand="lg" className="bg-body-light p-md-3">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Link hrer='#link' id='link2' style={{ display: 'none' }} className='ms-md-3'><FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" /></Nav.Link>
                <Navbar.Brand href="#home" className='ms-md-5 fw-bold' style={{color:'#666666'}}>
                    <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdm6qu_J2PY7a5R1TjfYE8FNrNVxQU3lO3XFZWxhe5_hD9LhGlBp7G6VPzBGNSyCcftOY&usqp=CAU"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Microsoft
                </Navbar.Brand>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="start" >
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <Nav className="me-auto bg-light">
                            <Nav.Link href="#home">Microsoft 365</Nav.Link>
                            <Nav.Link href="#link">Teams</Nav.Link>
                            <Nav.Link href="#link">Copilot</Nav.Link>
                            <Nav.Link href="#link">Windows</Nav.Link>
                            <Nav.Link href="#link">Surface</Nav.Link>
                            <Nav.Link href="#link">Xbox</Nav.Link>
                            <Nav.Link href="#link">Deals</Nav.Link>
                            <Nav.Link href="#link">Small Business</Nav.Link>
                            <Nav.Link href="#link">Support</Nav.Link>
                        </Nav>
                        <NavDropdown title="All Microsoft" id="basic-nav-dropdown" className='bg-light mt-2 '>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Nav.Link hrer='#link' id='link3' className='ms-4'><FontAwesomeIcon icon={faMagnifyingGlass} flip="horizontal" /></Nav.Link>
                <Nav.Link hrer='#link' className='ms-md-3'><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                <Nav.Link hrer='#link' className='ms-md-3 border me-md-5  px-2 py-1  rounded-circle'><FontAwesomeIcon icon={faUser}  /></Nav.Link>
            </Navbar>


        </>
    )
}

export default Header
