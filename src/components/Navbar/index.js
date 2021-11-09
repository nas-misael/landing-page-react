import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizzaria Famiglia</NavLink>
                <NavIcon onClick={toggle}>
                    <Bars />
                    <p style={{display: 'none'}}>Menu</p>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
