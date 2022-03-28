import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './theme.css';


export default class Theme extends Component {
    handleColourBlue = () => {
        console.log("fffff");
        document.body.classList.toggle('dark-theme');
    }

    handleColourPink = () => {
        console.log("fffff");
        document.body.classList.toggle('pink-theme');
    }

    handleColourPurple= () => {
        console.log("fffff");
        document.body.classList.toggle('purple-theme');
    }

    handleColourBrown= () => {
        console.log("fffff");
        document.body.classList.toggle('brown-theme');
    }
    render() {
        return (

            <div >
                <section class="t-menu">
                    <input id="t-menutoggle" type="checkbox" />
                    <label class="t-menubtn" for="t-menutoggle">
                       
                    </label>
                    <ul class="t-menubox dark-theme ">

                        <div className="colors">
                            <div className="blue btn-toggle" onClick={this.handleColourBlue }></div>
                            <div className="pink " onClick={this.handleColourPink }></div>
                            <div className="black" onClick={this.handleColourPurple }></div>
                            <div className="brown" onClick={this.handleColourBrown }></div>
                        </div>
                        <li><a href="#c">A1</a></li>
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
}
