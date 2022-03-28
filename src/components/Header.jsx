import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Link } from 'react-router-dom';
import clouds from '../assets/clouds.png';
import clouds3 from '../assets/clouds2.png';
import moon from '../assets/moon2.png';
import './header.css';
import Books from "./Books";
import Main from "./Main";
import HamMenu from "./hamMenu";
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';



export default class Header extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">

                    <img src={clouds} class="firstCloud" />
                    <img src={moon} class="moon" />
                    <img src={clouds3} class="secondCloud" />
                </div>
            </div>
        );
    }
};

