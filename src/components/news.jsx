import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import fairy from '../assets/f4-removebg-preview.png';
import Dorian from '../assets/Dorian.jpg';
import Dune from '../assets/Dune.jpg';
import './news.css';



export default class News extends Component {
    render() {
        return (
            <div class="post" >
                <div class="wrapperN">
                    <div class="rec1">Reading is rewarding</div>
                    <img src={fairy} class="fairy" />
                    <div class="rec3"><p>The  Most Read Books</p>
                        <div class="famous" >
                            <img src={Dune} class="dune" />
                            <img  src={Dorian} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

