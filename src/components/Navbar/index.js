import React from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>AWESOME</NavLogo>
                <NavLink>1|2|3|4</NavLink>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
