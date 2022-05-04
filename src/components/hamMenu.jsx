import React from "react";
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
                        <li><Link to="/news">Home</Link></li>
                        <li><Link to="/database">All Books</Link></li>
                        </ul>
                    </section>
                </div>
        );};

export default HamMenu;