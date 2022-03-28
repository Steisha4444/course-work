import React  from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, Link } from 'react-router-dom';

import Header from "./Header";
import News from "./news";
import './theme.css'

function Main(){

    return (
        <div class="dark-theme ">
         
           <Header/> 
           <News/>
        </div>
    );
    
}

export default Main;