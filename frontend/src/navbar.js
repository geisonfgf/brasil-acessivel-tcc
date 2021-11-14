import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap';

export default function Profile() {
    return (
        <div>
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/">
            reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                <NavLink href="/components/">
                    Components
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                </NavLink>
                </NavItem>
                <UncontrolledDropdown
                inNavbar
                nav
                >
                <DropdownToggle
                    caret
                    nav
                >
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Option 1
                    </DropdownItem>
                    <DropdownItem>
                    Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Reset
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <NavbarText>
                Simple Text
            </NavbarText>
            </Collapse>
        </Navbar>
        </div>
    );
}