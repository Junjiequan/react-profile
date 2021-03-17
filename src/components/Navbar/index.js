import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo to="/">AWESOME</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to ="about">About</NavLinks>
                        <NavLinks to ="main">main</NavLinks>
                        <NavLinks to ="projects">projects</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navbar

