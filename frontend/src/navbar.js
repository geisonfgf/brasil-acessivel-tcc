import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    Input,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons'

import logo from '../src/assets/brasil_accessivel_logo.png';

export default function Header() {

    function handleSearchButtonClick() {
        console.log("Fazendo a busca...");
    }

    return (
        <div>
            <Navbar color="dark" dark expand="md" light>
                <NavbarBrand href="/">
                    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    &nbsp;&nbsp;Brasil Acessível
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/ajude/">Ajude o projeto</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contato/">contato</NavLink>
                        </NavItem>
                        <Button color="primary">
                            <FontAwesomeIcon icon={faMapMarker} /> Novo Local
                        </Button>
                    </Nav>
                    &nbsp;&nbsp;
                    <Form className="d-flex" >
                        <Input type="search" bsSize="sm" placeholder="Local/Serviço" />&nbsp;
                        <Input type="text" bsSize="sm" placeholder="Endereço" name="address" id="search-terms" />
                        <Button color="success"  onClick={ () => handleSearchButtonClick() }><FontAwesomeIcon icon={faSearch} /></Button>
                    </Form>
                    &nbsp;&nbsp;
                    <Button color="light">Registrar</Button>&nbsp;
                    <Button color="success">Logar</Button>
                </Collapse>
            </Navbar>
        </div>
    );
}