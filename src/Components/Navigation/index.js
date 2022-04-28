import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const links = [
    { path: '/store', name: 'Store' },
    { path: '/about', name: 'About' },
    { path: '/cart', name: 'Cart' },
]

const Navigation = () => {
    return (
        <>
            <Navbar className='navigation'>
                <Container className="justify-content-center navbar-container">
                    <Nav>
                        {links.map((link, index) => {
                            return (
                                <NavLink key={index} className={'nav-route'} to={link.path} replace>
                                    {link.name}
                                </NavLink>
                            );
                        })}

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;