import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import fairy from '../assets/f4-removebg-preview.png';
import Dune from '../assets/b.png';
import './news.css';
import HamMenu from "./hamMenu";
import Doc from "./Doc";

export default class News extends Component {
    render() {
        return (
            
            <div class="post" >
                  <Doc/>
                <HamMenu />
                <div class="wrapperN">
                    <div class="rec1">Reading is rewarding</div>
                    <img src={fairy} class="fairy" />
                    <div class="rec3"><p>Books are a uniquely portable magic</p>
                        <div class="famous" >
                            <img src={Dune} class="dune" />
                            {/* <img  src={Dorian} /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

