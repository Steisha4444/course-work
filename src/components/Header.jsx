import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import clouds from '../assets/clouds.png';
import clouds3 from '../assets/clouds2.png';
import moon from '../assets/moon2.png';
import './header.css';
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

