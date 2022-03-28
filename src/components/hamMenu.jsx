import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './hamMenu.css';


function HamMenu() {
        return (
           
                <div>
                    <section class="hamburger-menu">
                        <input id="menutoggle" type="checkbox" />
                        <label class="menubtn" for="menutoggle">
                            <span></span>
                        </label>
                        <ul class="menubox">
                        <li><Link to="/book">Books</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/database">Database</Link></li>
                        <li><Link to="/books">BookInfo</Link></li>
                        <li><Link to="/text">Text</Link></li>
                                {/* <li><a href="#c">A1</a></li>
                            <li><a href="#d">A2</a></li>
                            <li><a href="#d">B1</a></li>
                            <li><a href="#d">B2</a></li>
                            <li><a href="#d">C1</a></li> */}
                        
                        </ul>
                    </section>


                </div>
                
        );
    
};

export default HamMenu;