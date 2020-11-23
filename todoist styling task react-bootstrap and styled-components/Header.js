
import React, { useState } from 'react';
// import logo from './Images/logo.png';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #acacac;
    }
    .navbar-brand{
        color: #353535;
        font-size: 40px;
        &:hover {
            color:white;
        }
    }

`;

const Header = () => {

    return (
        <>
            <Styles>
                <Navbar expand="lg">
                    {/* <img src={logo} alt='logo' width='70' height='50' /> */}
                    <Navbar.Brand href="/">Todoist Replica</Navbar.Brand>
                </Navbar>
            </Styles>
        </>
    )
}

export default Header;