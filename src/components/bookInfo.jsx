import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import './bookInfo.css';
import clouds from '../assets/clouds.png';
import clouds3 from '../assets/clouds2.png';
import moon from '../assets/moon2.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BookInfo(props) {


    return (
        <div>
            <div class="wrapper">

                <img src={clouds} class="firstCloud" />
                <img src={moon} class="moon2" />
                <img src={clouds3} class="secondCloud" />
            </div>

            <div className="rectangle"> </div>

            <div className="book">
                <img className="bookCover" src={require(`../books/${props.location.state.bookName}.jpg`).default} alt="" />
                <h1 className="bookTitle">{props.location.state.bookName}</h1>
                <Link to={{
                                                                        pathname: "/text",
                                                                        state: props.location.state
                                                                }}
                                                                >
                                                                        Read {props.location.state.bookName}
                                                                </Link>
                <h2 className="bookDescription">{props.location.state.Description}</h2>

                <div className="author">
                    <img className="authorPhoto" src={require(`../authors/${props.location.state.Author}.jpg`).default} alt="" />
                    <h2 className="bookAuthor">{props.location.state.Author}</h2>
                </div>

                <div className="rowInfo">
                    <h2 className="bookLevel">Level  {props.location.state.level} </h2>
                    <h2 className="bookPages">{props.location.state.pages} pages</h2>
                    <h2 className="bookRating">Rating {props.location.state.rating}/5</h2>

                </div>
            </div>
        </div>
    );
}


export default BookInfo;

